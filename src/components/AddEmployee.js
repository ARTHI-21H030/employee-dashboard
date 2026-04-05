import { useState } from "react";

function AddEmployee({ addEmployee }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addEmployee({
      name,
      role,
      email,
      department,
      salary,
      status: "Active"
    });

    setName("");
    setRole("");
    setEmail("");
    setDepartment("");
    setSalary("");
  };

  return (
    <div>
      <h2>Add Employee</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
<br></br>
<br></br>
        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
<br></br>
<br></br>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
<br></br>
<br></br>
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="">Select Department</option>
          <option>HR</option>
          <option>IT</option>
          <option>Finance</option>
        </select>
<br></br>
<br></br>
        <input
          type="number"
          placeholder="Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
<br></br>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddEmployee;