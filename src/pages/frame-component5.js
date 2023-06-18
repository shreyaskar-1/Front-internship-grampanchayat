import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./frame-component5.css";

const FrameComponent5 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data here or update state based on your requirements
    // For example, you can fetch data from an API using the Fetch API or Axios
    // Once the data is fetched, you can update the state variables accordingly
    const fetchData = async () => {
      try {
        const response = await fetch("your_api_endpoint");
        const data = await response.json();
        setEmail(data.email);
        setPassword(data.password);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleLogin = () => {
    // Perform login logic here
    // ...

    // Redirect to the desired page after successful login
    navigate("/frame-4");
  };

  return (
    <div className="image-2-parent">
      <img className="image-2-icon" alt="" src="/image-2@2x.png" />
      <div className="frame-child63" />
      <div className="welcome-back">Welcome back</div>
      <div className="please-enter-your">
        Please enter your contact details to connect.
      </div>
      <div className="email-address">Email address</div>
      <div className="input15">
        <input
          type="text"
          className="name3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="password1">Password</div>
      <div className="input16">
        <input
          type="password"
          className="name3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="button2" onClick={handleLogin}>
        <div className="login">Log in</div>
      </div>
    </div>
  );
};

export default FrameComponent5;
