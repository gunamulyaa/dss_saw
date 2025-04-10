import React, { useEffect, useState, useMemo, useRef} from "react";
import DataTable from "react-data-table-component";
import { useLocation } from 'react-router-dom';

const HasilSAW = () => {
  const location = useLocation();
  const rawData = location.state?.data || [];

  const baseUrl = import.meta.env.VITE_API_URL;

  const alternatives = useMemo(() => {
    return rawData.map(({ alternativeName, ...rest }) => ({
      alternativeName,
      values: rest
    }));
  }, [rawData]);

  // 1: GET CRITERIA
  const [rawCriteria, setCriterias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data dari backend Express
    fetch(`${baseUrl}/api/criteria`)
      .then((res) => res.json())
      .then((data) => {
        setCriterias(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  // 2: MAPPING CRITERIA NAME (Param and Criteria Name has Differenct Format)
  const mapCriteriaName = {
    'Harga Premi':'insurancePremium',
    'Jumlah Pertanggungan':'coverageAmount',
    'Masa Tunggu Klaim':'waitingPeriode',
    'Cakupan Perlindungan':'coverageType',
    'Limit Kunjungan/Tahun':'annualVisitLimit',
    'Rumah Sakit Rekanan':'partnerHospitals',
    'Proses Klaim':'claimProcessSpeed',
    'Lama Proses':'processDay',
    'Dokumen Pendukung':'requiredDocuments',
  };

  const criteria = rawCriteria.map((c) => ({
    ...c,
    criteriaName: mapCriteriaName[c.criteriaName] || c.criteriaName,
    criteriaId: mapCriteriaName[c.criteriaName] || c.criteriaName,
  }));

  // Normalisasi
  const maxValues = criteria.reduce((acc, crit) => {
    const max = Math.max(...alternatives.map((alt) => alt.values[crit.criteriaName]));
    acc[crit.criteriaName] = max;
    return acc;
  }, {});

  const normalized = alternatives.map((alt) => {
    const normValues = {};
    criteria.forEach((crit) => {
      normValues[crit.criteriaName] = (
        alt.values[crit.criteriaName] / maxValues[crit.criteriaName]
      ).toFixed(4);
    });
    return { alternativeName: alt.alternativeName, values: normValues };
  });

  console.log(normalized);

  const scored = normalized.map((alt) => {
    const score = criteria.reduce(
      (acc, crit) =>
        acc + parseFloat(alt.values[crit.criteriaName]) * crit.weight,
      0
    );
    return { name: alt.alternativeName, score: score.toFixed(4) };
  });

  console.log(scored);

  const ranked = useMemo(() => {
    return [...scored]
      .sort((a, b) => b.score - a.score)
      .map((item, index) => ({ ...item, rank: index + 1 }));
  }, [scored]);
  console.log(ranked);


  // Kolom Tabel
  const altColumns = [
    { name: "Alternatif", selector: (row) => row.alternativeName, sortable: true },
    ...rawCriteria.map((crit) => ({
      name: crit.criteriaName,
      selector: (row) => row.values[mapCriteriaName[crit.criteriaName]],
    })),
  ];


  const resultColumns = [
    { name: "Alternatif", selector: (row) => row.name, sortable: true },
    { name: "Skor SAW", selector: (row) => row.score, sortable: true },
    { name: "Ranking", selector: (row) => row.rank, sortable: true },
  ];
  console.log(resultColumns);

  // SAVE TO DB
  const hasPostedRef = useRef(false); // 

  useEffect(() => {
    if (hasPostedRef.current) return; // 

    if ( rawData.length > 0|| ranked.length > 0) {
      hasPostedRef.current = true; 

      const postData = async () => {
        const body = rawData.map((alt) => {
          const match = ranked.find((r) => r.name === alt.alternativeName);
          return {
            ...alt,
            sValue: match?.score || null,
            rankValue: match?.rank || null,
          };
        });
  
        try {
          const res = await fetch(`${baseUrl}/api/dss`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          });
  
          const data = await res.json();
          console.log("Berhasil dikirim:", data);
        } catch (error) {
          console.error("Gagal ngirim:", error);
        }
      };
      postData();
    }
  }, [alternatives, ranked]);

  if (loading) return <p>Loading...</p>;

  // Styling langsung
  const tableStyle = {
    table: {
      style: {
        border: "1px solid #ccc",
        borderRadius: "10px",
        overflow: "hidden",
      },
    },
    headRow: {
      style: {
        backgroundColor: "#f5f5f5",
        borderBottom: "1px solid #ccc",
      },
    },
    headCells: {
      style: {
        fontWeight: "bold",
        borderRight: "1px solid #eee",
      },
    },
    rows: {
      style: {
        borderBottom: "1px solid #ddd",
      },
    },
    cells: {
      style: {
        borderRight: "1px solid #eee",
      },
    },
  };

  // Warna khusus untuk juara 1
  const rowHighlight = [
    {
      when: (row) => row.rank === 1,
      style: {
        backgroundColor: "#FFD700",
        fontWeight: "bold",
      },
    },
  ];

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 20 }}>
      <h2 style={{ textAlign: "center" }}>Hasil Perhitungan SAW</h2>

      <h4 style={{ marginTop: 40 }}>1. Tabel Nilai Alternatif</h4>
      <DataTable
        columns={altColumns}
        data={alternatives}
        dense
        customStyles={tableStyle}
        striped
        highlightOnHover
      />

      <h4 style={{ marginTop: 40 }}>2. Tabel Normalisasi</h4>
      <DataTable
        columns={altColumns}
        data={normalized}
        dense
        customStyles={tableStyle}
        striped
        highlightOnHover
      />

      <h4 style={{ marginTop: 40 }}>3. Tabel Hasil Akhir & Ranking</h4>
      <DataTable
        columns={resultColumns}
        data={ranked}
        dense
        customStyles={tableStyle}
        striped
        highlightOnHover
        conditionalRowStyles={rowHighlight}
      />
    </div>
  );
};

export default HasilSAW;



  // CONTOH FORMAT data alternative dan criteria
  // const alternatives = [
  //   { name: "Indra", values: { C1: 70, C2: 50, C3: 80, C4: 60 } },
  //   { name: "Roni", values: { C1: 50, C2: 60, C3: 82, C4: 70 } },
  //   { name: "Putri", values: { C1: 85, C2: 55, C3: 80, C4: 75 } },
  //   { name: "Dani", values: { C1: 82, C2: 70, C3: 65, C4: 85 } },
  //   { name: "Ratna", values: { C1: 75, C2: 75, C3: 85, C4: 74 } },
  //   { name: "Mira", values: { C1: 62, C2: 50, C3: 75, C4: 80 } },
  // ];

  // const criteria = [
  //   { id: "C1", name: "C1", weight: 0.25 },
  //   { id: "C2", name: "C2", weight: 0.2 },
  //   { id: "C3", name: "C3", weight: 0.3 },
  //   { id: "C4", name: "C4", weight: 0.25 },
  // ];

