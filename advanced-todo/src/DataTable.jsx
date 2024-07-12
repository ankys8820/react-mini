import React, { useEffect, useState } from "react";

const DataTable = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    age: "",
  });
  const [data, setData] = useState([]);
  const [editId, setEditID] = useState(false);

  useEffect(() => {
    if (!editId) return;
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //   console.log(formData);

  const handleAddClick = () => {
    if (formData.name && formData.gender && formData.age) {
      const newItem = {
        id: Date.now(),
        name: formData.name,
        gender: formData.gender,
        age: formData.age,
      };
      setData([...data, newItem]);
      setFormData({ name: "", gender: "", age: "" });
      alert("Data added successfully!");
    }
  };

  const handleDelete = (id) => {
    const updatedList = data.filter((item) => item.id !== id);
    setData(updatedList);
    alert("Data removed!");
  };
  const handleEdit = (id) => {};

  //   console.log(data);
  return (
    <>
      <div className="container">
        <div className="add-container">
          <div className="info-container">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
            />
          </div>
          <button className="add" onClick={handleAddClick}>
            ADD
          </button>
        </div>

        <div className="search-table-container">
          <input
            type="text"
            placeholder="Search by name"
            className="search-input"
            value={""}
            onChange={() => {}}
          />
          {/*  */}
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item) => (
                <>
                  <tr key={item.id}>
                    <td id={item.id} contentEditable={editId === item.id}>
                      {item.name}
                    </td>
                    <td id={item.id} contentEditable={editId === item.id}>
                      {item.gender}
                    </td>
                    <td id={item.id} contentEditable={editId === item.id}>
                      {item.age}
                    </td>
                    <td className="actions">
                      <button
                        className="edit"
                        onClick={() => setEditID(item.id)}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="delete"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
          <div className="pagination"></div>
        </div>
      </div>
    </>
  );
};

export default DataTable;
