import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const [users, setUsers] = useState([]);

  const validateForm = () => {
    let newErrors = {};

    if (name.trim() === "") {
      newErrors.name = "Name is required";
    }

    if (email.trim() === "") {
      newErrors.email = "Email is required";
    }

    if (password.trim() === "") {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const newUser = {
        name: name,
        email: email,
      };

      setUsers([...users, newUser]);

      setSubmitted(true);

      setName("");
      setEmail("");
      setPassword("");
    } else {
      setSubmitted(false);
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Registration Form</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p className="error">{errors.name}</p>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="error">{errors.email}</p>

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="error">{errors.password}</p>

          <button type="submit">Register</button>
        </form>

        {submitted && (
          <p className="success">Registration Successful!</p>
        )}

        {users.length > 0 && (
          <div className="user-box">
            <h3>Registered Users</h3>

            <ul>
              {users.map((user, index) => (
                <li key={index}>
                  {user.name} - {user.email}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div class="footer">
          <p>Copyright © Bhavya Sengar - 2503201000397 - CSE-14</p>
        </div>

      </div>
    </div>
  );
}

export default App;