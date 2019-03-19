import React from "react";

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>Todo React App</h1>
    </header>
  );
}
const headerStyle = {
  background: "#333",
  textAlign: "center",
  color: "#fff",
  padding: "10px"
};
