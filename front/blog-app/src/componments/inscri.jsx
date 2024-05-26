import { Await, Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import axios from "axios";
function Inscri() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const handleInputChange = (e, type) => {
    switch (type) {
      case "firstname":
        setError("");
        setFirstName(e.target.value);
        if (e.target.value === "") {
          setError("Firsname has left blank");
        }
        break;
      case "lastname":
        setError("");
        setLastName(e.target.value);
        if (e.target.value === "") {
          setError("Lastname has left blank");
        }
        break;
      case "username":
        setError("");
        setUsername(e.target.value);
        if (e.target.value === "") {
          setError("Username has left blank");
        }
        break;
      case "mail":
        setError("");
        setMail(e.target.value);
        if (e.target.value === "") {
          setError("mail has left blank");
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
  const handleSubmit = () => {
    try {
      axios.post("/Register.php", {
        firstname,
        lastname,
        username,
        mail,
        password,
      });
      setMsg("Sign up successful");
    } catch (error) {
      setError("Error signing up");
      {
        alert("not connected");
      }
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
          <p class="title">Register </p>
          <p class="message">Signup now and get full access to our app. </p>
          <div class="flex">
            <label>
              <input
                required=""
                placeholder=""
                type="text"
                class="input"
                onChange={(event) => handleInputChange(event, "firstname")}
              />
              <span>Firstname</span>
            </label>

            <label>
              <input
                required=""
                placeholder=""
                type="text"
                class="input"
                onChange={(event) => handleInputChange(event, "lastname")}
              />
              <span>Lastname</span>
            </label>
          </div>

          <label>
            <input
              required=""
              placeholder=""
              type="email"
              class="input"
              onChange={(event) => handleInputChange(event, "mail")}
            />
            <span>Email</span>
          </label>
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
          <Link to="/Login">LOG IN</Link>
          <Link to="/index">Home</Link>
        </form>
      </form>
    </div>
  );
}
export default Inscri;
