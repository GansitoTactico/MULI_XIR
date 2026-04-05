import React from "react";
import Navbar from "../components/Navbar";

function Profile() {
  return (
    <div style={{ background: "var(--background-gradient)", minHeight: "100vh", color: "var(--text-primary)" }}>
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl" style={{ color: "var(--text-primary)" }}>Profile</h1>
        <p style={{ color: "var(--text-secondary)" }}>This is the profile page.</p>
      </div>
    </div>
  );
}

export default Profile;
