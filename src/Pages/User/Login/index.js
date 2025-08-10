import React from "react";


import { useState } from "react";
import Button from "@mui/material/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    setError("");
    // Add login logic here
    alert("Login successful!");
  };

  return (
    <div className="container py-5" style={{ maxWidth: 400 }}>
      <h2 style={{ fontWeight: 700, marginBottom: 16 }}>Login</h2>
      <form onSubmit={handleSubmit} style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px rgba(0,0,0,0.07)", padding: 32 }}>
        <div style={{ marginBottom: 18 }}>
          <label htmlFor="email" style={{ fontWeight: 500, marginBottom: 6, display: "block" }}>Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ width: "100%", padding: 10, borderRadius: 6, border: "1px solid #ccc" }}
            placeholder="Enter your email"
            required
          />
        </div>
        <div style={{ marginBottom: 18 }}>
          <label htmlFor="password" style={{ fontWeight: 500, marginBottom: 6, display: "block" }}>Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ width: "100%", padding: 10, borderRadius: 6, border: "1px solid #ccc" }}
            placeholder="Enter your password"
            required
          />
        </div>
        {error && <div style={{ color: "#d32f2f", marginBottom: 12 }}>{error}</div>}
        <Button type="submit" variant="contained" color="primary" fullWidth style={{ fontWeight: 600, padding: "10px 0" }}>
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
