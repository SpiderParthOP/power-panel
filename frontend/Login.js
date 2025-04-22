import React, { useState } from "react";
import axios from "axios";

export default function Login({ setToken }) {
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username,
        password
      });
      setToken(res.data.token);
    } catch {
      alert("Login failed");
    }
  };

  return (
    <div>
      <h2>Login to Power Panel</h2>
      <input placeholder="Username" onChange={(e) => setUser(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  );
}
