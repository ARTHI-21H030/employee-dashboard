import './App.css';
import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/EmployeeList";

function App() {
  const [employees, setEmployees] = useState(() => {
    const saved = localStorage.getItem("employees");
    return saved ? JSON.parse(saved) : [];
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const deleteEmployee = (index) => {
    const updatedEmployees = employees.filter((emp, i) => i !== index);
    setEmployees(updatedEmployees);
  };

  const editEmployee = (index, updatedEmployee) => {
    const updatedEmployees = employees.map((emp, i) =>
      i === index ? updatedEmployee : emp
    );
    setEmployees(updatedEmployees);
  };

  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <Header />

      <div className="card">
        <AddEmployee addEmployee={addEmployee} />
      </div>

      <div className="card">
        <input
          type="text"
          placeholder="Search employee..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <p>Total Employees: {filteredEmployees.length}</p>

        <EmployeeList
          employees={filteredEmployees}
          deleteEmployee={deleteEmployee}
          editEmployee={editEmployee}
        />
      </div>
    </div>
  );
}

export default App;