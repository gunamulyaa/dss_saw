import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import "../InputForm.css";

function InputForm() {
  const [alternatives, setAlternatives] = useState([false]);
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('./hasil.jsx', {
      state: {
        data: alternatives
      }
    });
  };

  const addAlternative = () => {
    const newAlternative = {
      id: Date.now(),
      alternativeName: "",
      insurancePremium: "",
      coverageAmount: "",
      waitingPeriode: "",
      coverageType: "",
      annualVisitLimit: "",
      partnerHospitals: "",
      claimProcessSpeed: "",

    };
    setAlternatives([...alternatives, newAlternative]);
  };

  const removeAlternative = (id) => {
    if (alternatives.length > 1) {
      setAlternatives(alternatives.filter((alt) => alt.id !== id));
    }
  };

  const handleChange = (id, field, value) => {
    setAlternatives(
      alternatives.map((alt) =>
        alt.id === id ? { ...alt, [field]: value } : alt
      )
    );
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3 text-center">Sistem Pemilihan Asuransi Kesehatan</h3>

      <Button variant="primary" onClick={addAlternative} className="mb-3">
        Tambah Alternatif
      </Button>

      {alternatives.map((alt, index) => (
        <Card className="mb-3" key={alt.id}>
          <Card.Header className="d-flex justify-content-between align-items-center">
            <strong>Alternatif {index + 1}</strong>
            {alternatives.length > 1 && (
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeAlternative(alt.id)}
              >
                Hapus
              </Button>
            )}
          </Card.Header>
          <Card.Body className="text-start">
            <Form>
              <Form.Group className="mb-2">
                <Form.Label>Nama Alternatif</Form.Label>
                <Form.Control
                  type="text"
                  value={alt.alternativeName}
                  onChange={(e) =>
                    handleChange(alt.id, "alternativeName", e.target.value)
                  }
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Harga Premi</Form.Label>
                <Form.Control
                  type="number"
                  value={alt.insurancePremium}
                  onChange={(e) =>
                    handleChange(alt.id, "insurancePremium", e.target.value)
                  }
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Jumlah Pertanggungan</Form.Label>
                <Form.Control
                  type="number"
                  value={alt.coverageAmount}
                  onChange={(e) =>
                    handleChange(alt.id, "coverageAmount", e.target.value)
                  }
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Masa Tunggu Klaim</Form.Label>
                <Form.Control
                  type="number"
                  value={alt.waitingPeriode}
                  onChange={(e) =>
                    handleChange(alt.id, "waitingPeriode", e.target.value)
                  }
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Limit Kunjungan/Tahun</Form.Label>
                <Form.Control
                  type="number"
                  value={alt.annualVisitLimit}
                  onChange={(e) =>
                    handleChange(alt.id, "annualVisitLimit", e.target.value)
                  }
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Cakupan Perlindungan</Form.Label>
                <Form.Control
                  type="number"
                  value={alt.coverageType}
                  onChange={(e) =>
                    handleChange(alt.id, "coverageType", e.target.value)
                  }
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Rumah Sakit Rekanan</Form.Label>
                <Form.Control
                  type="number"
                  value={alt.partnerHospitals}
                  onChange={(e) =>
                    handleChange(alt.id, "partnerHospitals", e.target.value)
                  }
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Proses Klaim</Form.Label>
                <Form.Control
                  type="number"
                  value={alt.claimProcessSpeed}
                  onChange={(e) =>
                    handleChange(alt.id, "claimProcessSpeed", e.target.value)
                  }
                />
              </Form.Group>

            </Form>
          </Card.Body>
        </Card>
      ))}

      {alternatives.length > 0 && (
        <Button variant="success" onClick={handleSubmit}>
          Simpan
        </Button>
      )}
    </div>
  );
}

export default InputForm;
