import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { isMobile } from "react-device-detect";

import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
import Lobby from "./pages/Lobby";
import GameRoom from "./pages/GameRoom";

function App() {
  // Agar desktop user ho
  if (!isMobile) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          color: "#000",
          fontSize: "24px",
          textAlign: "center",
          margin: 0,
          padding: 0,
          overflow: "hidden",
        }}
      >
        This app is only available on mobile devices.
      </div>
    );
  }

  // Mobile users ke liye
  return (
    <Router>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          margin: 0,
          padding: 0,
          overflow: "hidden",
          backgroundColor: "#fff", // default black background
        }}
      >
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/lobby" element={<Lobby />} />
          <Route path="/game/:roomId" element={<GameRoom />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
