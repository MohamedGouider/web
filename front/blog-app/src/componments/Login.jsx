import { Await, Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import axios from "axios";
function Inscri() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const handleInputChange = (e, type) => {
    switch (type) {
      case "username":
        setError("");
        setUsername(e.target.value);
        if (e.target.value === "") {
          setError("Username has left blank");
        }
        break;
      case "password":
        setError("");
        setPassword(e.target.value);
        if (e.target.value === "") {
          setError("password has left blank");
        }
        break;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/login.php", {
        username,
        password,
      });
      console.log("Response from server:", response.data);
      setResult("response.data.message");
    } catch (error) {
      console.error("Error:", error);
      setResult("Login failed: " + error.message);
    }
  };
  return (
    <div className="inscription">
      <form onSubmit={handleSubmit}>
        <p>
          {error !== "" ? (
            <span className="error">{error}</span>
          ) : (
            <span className="success">{msg}</span>
          )}
        </p>
        <form class="form">
          <p class="title">Log in </p>
          <label>
            <input
              required=""
              placeholder=""
              type="password"
              class="input"
              onChange={(event) => handleInputChange(event, "username")}
            />
            <span>username</span>
          </label>
          <label>
            <input
              required=""
              placeholder=""
              type="password"
              class="input"
              onChange={(event) => handleInputChange(event, "password")}
            />
            <span>Password</span>
          </label>

          <button class="submit">Submit</button>
          <p class="signin">Already have an acount ? </p>
          <Link to="/Inscri">LOG IN</Link>
          <Link to="/index">Home</Link>
        </form>
      </form>
    </div>
  );
}
export default Inscri;
