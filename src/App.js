import { useState } from "react";
import "./App.css";

function App() {
  const [place, setPlace] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [rows, setRows] = useState([]);

  const resetForm = () => {
    setPlace("");
    setName("");
    setAge("");
  };

  const handleAdd = (event) => {
    event.preventDefault();

    if (!place.trim() || !name.trim() || !age.trim()) return;

    setRows((prev) => [
      ...prev,
      {
        id: Date.now() + Math.random(),
        place: place.trim(),
        name: name.trim(),
        age: age.trim(),
      },
    ]);
    resetForm();
  };

  const handleRemove = (id) => {
    setRows((prev) => prev.filter((row) => row.id !== id));
  };

  return (
    <div className="page">
      <div className="card">
        <h1>Add People to Table</h1>
        <p className="subtitle">Enter Place, Name, and Age, then click Add.</p>

        <form onSubmit={handleAdd}>
          <div className="fields">
            <label>
              Place
              <input
                type="text"
                name="place"
                placeholder="e.g. Mumbai"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
              />
            </label>

            <label>
              Name
              <input
                type="text"
                name="name"
                placeholder="e.g. Akash"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label>
              Age
              <input
                type="number"
                name="age"
                placeholder="e.g. 24"
                min="0"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </label>
          </div>

          <div className="actions">
            <button type="submit" className="btn primary">
              Add
            </button>
            <button type="button" className="btn secondary" onClick={resetForm}>
              Clear
            </button>
          </div>
        </form>

        {rows.length === 0 ? (
          <div className="empty">No entries yet. Add your first row!</div>
        ) : (
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Place</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id}>
                    <td>{row.place}</td>
                    <td>{row.name}</td>
                    <td>{row.age}</td>
                    <td>
                      <button
                        type="button"
                        className="btn danger"
                        onClick={() => handleRemove(row.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;