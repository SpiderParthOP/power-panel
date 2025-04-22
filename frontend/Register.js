import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");

  const register = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        username,
        password
      });
      alert("Registered! Now login.");
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Username" onChange={(e) => setUser(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
      <button onClick={register}>Register</button>
    </div>
  );
}
