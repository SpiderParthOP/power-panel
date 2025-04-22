import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

function App() {
  const [token, setToken] = useState(null);

  if (!token) return (
    <>
      <Register />
      <Login setToken={setToken} />
    </>
  );

  return <h2>✅ Logged in! Token: {token}</h2>;
}

export default App;
