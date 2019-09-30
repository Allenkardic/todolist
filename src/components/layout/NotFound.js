import React from "react";
function NotFound() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ paddingTop: "4rem" }}>Error page</h1>
      <i
        style={{ fontSize: "5em", marginBottom: "2rem", marginTop: "2rem" }}
        class="fas fa-exclamation-triangle"
      ></i>
      <p>This page doesnot exist</p>
    </div>
  );
}

export default NotFound;
