import React, { useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  // Tambah siswa baru
  const addStudent = () => {
    if (name.trim() === "" || !["Hadir", "Tidak Hadir"].includes(status)) {
      alert("Nama tidak boleh kosong dan status harus valid (Hadir/Tidak Hadir).");
      return;
    }
    setStudents([...students, { name, status }]);
    setName("");
    setStatus("");
  };

  // Filter siswa berdasarkan kehadiran
  const filterStudents = (filter) => {
    return students.filter((student) => student.status === filter);
  };

  // Hapus semua data siswa (menggunakan while loop)
  const clearAllStudents = () => {
    let count = students.length;
    while (count > 0) {
      setStudents((prevStudents) => prevStudents.slice(0, prevStudents.length - 1));
      count--;
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Absen Kehadiran Siswa</h1>
      <div>
        <input
          type="text"
          placeholder="Nama Siswa"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">Pilih Status</option>
          <option value="Hadir">Hadir</option>
          <option value="Tidak Hadir">Tidak Hadir</option>
        </select>
        <button onClick={addStudent}>Tambah</button>
        <button onClick={clearAllStudents} style={{ marginLeft: "10px" }}>
          Hapus Semua Data
        </button>
      </div>
      <h2>Daftar Siswa</h2>
      {students.length === 0 ? (
        <p>Belum ada data siswa.</p>
      ) : (
        <ul>
          {students.map((student, index) => (
            <li key={index}>
              {student.name} - {student.status}
            </li>
          ))}
        </ul>
      )}
      <h3>Siswa Hadir</h3>
      <ul>
        {filterStudents("Hadir").map((student, index) => (
          <li key={index}>{student.name}</li>
        ))}
      </ul>
      <h3>Siswa Tidak Hadir</h3>
      <ul>
        {filterStudents("Tidak Hadir").map((student, index) => (
          <li key={index}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
