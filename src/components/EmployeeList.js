import { useState } from "react";

function EmployeeList({ employees, deleteEmployee, editEmployee }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({});

  const handleEdit = (index, emp) => {
    setEditIndex(index);
    setEditData(emp);
  };

  const handleSave = () => {
    editEmployee(editIndex, editData);
    setEditIndex(null);
  };

  return (
    <div className="employee-grid">
      {employees.map((emp, index) => (
        <div className="employee-card" key={index}>
          {editIndex === index ? (
            <>
              <input
                value={editData.name}
                onChange={(e) =>
                  setEditData({ ...editData, name: e.target.value })
                }
              />

              <input
                value={editData.role}
                onChange={(e) =>
                  setEditData({ ...editData, role: e.target.value })
                }
              />

              <input
                value={editData.email}
                onChange={(e) =>
                  setEditData({ ...editData, email: e.target.value })
                }
              />

              <input
                value={editData.department}
                onChange={(e) =>
                  setEditData({
                    ...editData,
                    department: e.target.value,
                  })
                }
              />

              <input
                value={editData.salary}
                onChange={(e) =>
                  setEditData({ ...editData, salary: e.target.value })
                }
              />

              <button onClick={handleSave}>Save</button>
            </>
          ) : (
            <>
              <h3>{emp.name}</h3>
              <p>{emp.role}</p>
              <p>{emp.email}</p>

              <span className="badge">{emp.department}</span>

              <p>Salary: ₹{emp.salary}</p>

              <span className="status">{emp.status}</span>

              <div className="btn-group">
                <button onClick={() => handleEdit(index, emp)}>
                  Edit
                </button>

                <button onClick={() => deleteEmployee(index)}>
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default EmployeeList;