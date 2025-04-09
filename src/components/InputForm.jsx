import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import "../InputForm.css";

function InputForm() {
  const [alternatives, setAlternatives] = useState([false]);

  const addAlternative = () => {
    const newAlternative = {
      id: Date.now(),
      name: "",
      age: "",
      healthHistory: "",
      budget: "",
      hospitalCoverage: "",
      treatmentPreference: "",
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
                  value={alt.name}
                  onChange={(e) =>
                    handleChange(alt.id, "name", e.target.value)
                  }
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Usia</Form.Label>
                <Form.Control
                  type="number"
                  value={alt.age}
                  onChange={(e) =>
                    handleChange(alt.id, "age", e.target.value)
                  }
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Riwayat Kesehatan (1-5)</Form.Label>
                <Form.Control
                  type="number"
                  min="1"
                  max="5"
                  value={alt.healthHistory}
                  onChange={(e) =>
                    handleChange(alt.id, "healthHistory", e.target.value)
                  }
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Budget</Form.Label>
                <Form.Control
                  type="number"
                  value={alt.budget}
                  onChange={(e) =>
                    handleChange(alt.id, "budget", e.target.value)
                  }
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Cakupan Rumah Sakit</Form.Label>
                <Form.Control
                  type="text"
                  value={alt.hospitalCoverage}
                  onChange={(e) =>
                    handleChange(alt.id, "hospitalCoverage", e.target.value)
                  }
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Preferensi Rawat (1: Inap, 2: Jalan)</Form.Label>
                <Form.Control
                  type="number"
                  min="1"
                  max="2"
                  value={alt.treatmentPreference}
                  onChange={(e) =>
                    handleChange(alt.id, "treatmentPreference", e.target.value)
                  }
                />
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      ))}

      {alternatives.length > 0 && (
        <Button variant="success" onClick={() => console.log(alternatives)}>
          Simpan
        </Button>
      )}
    </div>
  );
}

export default InputForm;
