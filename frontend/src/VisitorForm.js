import React, { useState, useEffect } from "react";

function VisitorForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [purpose, setPurpose] = useState("");
  const [visitors, setVisitors] = useState([]);
  const [search, setSearch] = useState("");

  const backendURL = "http://localhost/college-gate-backend";

  const fetchVisitors = async () => {
    try {
      const response = await fetch(`${backendURL}/get_visitors.php`);
      const data = await response.json();
      setVisitors(data);
    } catch (error) {
      console.error("Error fetching visitors:", error);
    }
  };

  useEffect(() => {
    fetchVisitors();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(contact)) {
      alert("Phone number must be 10 digits");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("contact", contact);
    formData.append("purpose", purpose);

    try {
      const res = await fetch(`${backendURL}/add_visitor.php`, {
        method: "POST",
        body: formData,
      });
      const text = await res.text();
      alert(text);
      setName("");
      setContact("");
      setPurpose("");
      fetchVisitors();
    } catch (error) {
      console.error("Error adding visitor:", error);
    }
  };

  const handleCheckOut = async (id) => {
    const formData = new FormData();
    formData.append("id", id);

    try {
      const res = await fetch(`${backendURL}/exit_visitor.php`, {
        method: "POST",
        body: formData,
      });
      const text = await res.text();
      alert(text);
      fetchVisitors();
    } catch (error) {
      console.error("Error checking out visitor:", error);
    }
  };

  const filteredVisitors = visitors.filter(
    (v) =>
      v.name.toLowerCase().includes(search.toLowerCase()) ||
      v.contact.includes(search)
  );

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
        padding: "20px",
        background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
        color: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          backgroundColor: "rgba(0,0,0,0.6)",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 15px rgba(0,0,0,0.5)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          🏢 Gate Entry Dashboard
        </h2>

        <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{
              marginBottom: "10px",
              width: "100%",
              padding: "12px",
              borderRadius: "5px",
              border: "none",
              fontSize: "16px",
            }}
          />
          <input
            type="text"
            placeholder="Contact (10 digits)"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
            style={{
              marginBottom: "10px",
              width: "100%",
              padding: "12px",
              borderRadius: "5px",
              border: "none",
              fontSize: "16px",
            }}
          />
          <input
            type="text"
            placeholder="Purpose"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            required
            style={{
              marginBottom: "10px",
              width: "100%",
              padding: "12px",
              borderRadius: "5px",
              border: "none",
              fontSize: "16px",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "12px 20px",
              backgroundColor: "#ff9800",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
              width: "100%",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#e68900")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#ff9800")}
          >
            Add Visitor
          </button>
        </form>

        <h3 style={{ marginBottom: "10px" }}>Visitor List</h3>
        <input
          type="text"
          placeholder="Search by name or contact"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            marginBottom: "10px",
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            fontSize: "16px",
          }}
        />

        <div style={{ overflowX: "auto" }}>
          <table
            border="0"
            cellPadding="10"
            style={{
              width: "100%",
              borderCollapse: "collapse",
              backgroundColor: "rgba(255,255,255,0.1)",
              color: "#fff",
              borderRadius: "5px",
            }}
          >
            <thead>
              <tr style={{ borderBottom: "2px solid #fff" }}>
                <th>ID</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Purpose</th>
                <th>Check In</th>
                <th>Check Out</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredVisitors.map((v) => (
                <tr
                  key={v.id}
                  style={{
                    textAlign: "center",
                    borderBottom: "1px solid rgba(255,255,255,0.3)",
                  }}
                >
                  <td>{v.id}</td>
                  <td>{v.name}</td>
                  <td>{v.contact}</td>
                  <td>{v.purpose}</td>
                  <td>{v.check_in}</td>
                  <td>{v.check_out || "-"}</td>
                  <td>
                    {!v.check_out && (
                      <button
                        onClick={() => handleCheckOut(v.id)}
                        style={{
                          padding: "6px 12px",
                          backgroundColor: "#f44336",
                          color: "#fff",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                          transition: "0.3s",
                        }}
                        onMouseOver={(e) =>
                          (e.target.style.backgroundColor = "#d7372b")
                        }
                        onMouseOut={(e) =>
                          (e.target.style.backgroundColor = "#f44336")
                        }
                      >
                        Check Out
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default VisitorForm;
