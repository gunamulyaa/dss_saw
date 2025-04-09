import React from "react";
import DataTable from "react-data-table-component";

const HasilSAW = () => {
  const alternatives = [
    { name: "Indra", values: { C1: 70, C2: 50, C3: 80, C4: 60 } },
    { name: "Roni", values: { C1: 50, C2: 60, C3: 82, C4: 70 } },
    { name: "Putri", values: { C1: 85, C2: 55, C3: 80, C4: 75 } },
    { name: "Dani", values: { C1: 82, C2: 70, C3: 65, C4: 85 } },
    { name: "Ratna", values: { C1: 75, C2: 75, C3: 85, C4: 74 } },
    { name: "Mira", values: { C1: 62, C2: 50, C3: 75, C4: 80 } },
  ];

  const criteria = [
    { id: "C1", name: "C1", weight: 0.25 },
    { id: "C2", name: "C2", weight: 0.2 },
    { id: "C3", name: "C3", weight: 0.3 },
    { id: "C4", name: "C4", weight: 0.25 },
  ];

  // Normalisasi
  const maxValues = criteria.reduce((acc, crit) => {
    const max = Math.max(...alternatives.map((alt) => alt.values[crit.id]));
    acc[crit.id] = max;
    return acc;
  }, {});

  const normalized = alternatives.map((alt) => {
    const normValues = {};
    criteria.forEach((crit) => {
      normValues[crit.id] = (
        alt.values[crit.id] / maxValues[crit.id]
      ).toFixed(4);
    });
    return { name: alt.name, values: normValues };
  });

  const scored = normalized.map((alt) => {
    const score = criteria.reduce(
      (acc, crit) =>
        acc + parseFloat(alt.values[crit.id]) * crit.weight,
      0
    );
    return { name: alt.name, score: score.toFixed(4) };
  });

  const ranked = [...scored]
    .sort((a, b) => b.score - a.score)
    .map((item, index) => ({ ...item, rank: index + 1 }));

  // Kolom Tabel
  const altColumns = [
    { name: "Alternatif", selector: (row) => row.name, sortable: true },
    ...criteria.map((crit) => ({
      name: crit.name,
      selector: (row) => row.values[crit.id],
    })),
  ];

  const resultColumns = [
    { name: "Alternatif", selector: (row) => row.name, sortable: true },
    { name: "Skor SAW", selector: (row) => row.score, sortable: true },
    { name: "Ranking", selector: (row) => row.rank, sortable: true },
  ];

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
