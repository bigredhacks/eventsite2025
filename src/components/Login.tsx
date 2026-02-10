import React from "react";

export default function Login() {
  return (
    <div style={styles.page}>
      <div style={styles.box}>
        
        <h3 style={styles.title}>Email</h3>
        <input
          type="email"
          placeholder="Email"
          style={styles.input}
        />
        <h3 style={styles.title}>Password</h3>
        <input
          type="password"
          placeholder="Password"
          style={styles.input}
        />
        <a href="#" style={{ fontSize: "12px", color: "#fe1736", textDecoration: "none" , textAlign: "center"}}>
          Forgot Password?
        </a>

        <button style={styles.button}>Login</button>

        <div style={styles.divider}>
          <span style={styles.line}></span>
        </div>

        <a href="/signup" style={{ textAlign: "center", marginTop: "20px", color: "#999192", textDecoration: "none" }}>
          Create Account
        </a>
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  box: {
    width: "320px",
    padding: "24px",
    backgroundColor: "#fff9f0",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  title: {
    textAlign: "center",
    marginBottom: "8px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #000000",
  },
  button: {
    marginTop: "8px",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#fe1736",
    color: "#fff9f0",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};
