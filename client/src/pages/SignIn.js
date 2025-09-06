import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate hook import karein

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // useNavigate hook ko initialize karein

  const handleLogin = (e) => { // e (event) ko parameter mein lein
    e.preventDefault(); // Default form submit behavior ko rokein
    
    // Yahan login logic add karein
    alert(`Email: ${email}\nPassword: ${password}`);

    // Login hone ke baad Lobby page par redirect karein
    navigate("/lobby"); 
  };

  return (
    <div style={styles.container}>
      {/* <form> tag add karein */}
      <form style={styles.formContainer} onSubmit={handleLogin}>
        <h1 style={styles.title}>Sign In</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Login
        </button>

        <p style={styles.links}>
          <a href="/signup" style={styles.link}>
            Sign Up
          </a>{" "}
          |{" "}
          <a href="/forgot-password" style={styles.link}>
            Forgot Password?
          </a>
        </p>
      </form>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "#00b33c",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    animation: "glow 2s infinite",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: 20,
    borderRadius: 12,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "80%",
    maxWidth: 300,
    backdropFilter: "blur(10px)",
  },
  title: {
    color: "#fff",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
    border: "none",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: 10,
    borderRadius: 8,
    border: "none",
    backgroundColor: "#fff",
    color: "#00b33c",
    fontWeight: "bold",
    cursor: "pointer",
    marginBottom: 10,
  },
  links: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
  link: {
    color: "#fff",
    fontWeight: "bold",
    textDecoration: "underline",
    cursor: "pointer",
  },
};

// glowing animation
const styleSheet = document.styleSheets[0];
const keyframes = `
@keyframes glow {
  0% { box-shadow: 0 0 10px rgba(0,179,60,0.5); }
  50% { box-shadow: 0 0 30px rgba(0,179,60,1); }
  100% { box-shadow: 0 0 10px rgba(0,179,60,0.5); }
}`;
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

export default SignIn;
