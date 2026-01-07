import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL || "http://localhost:4000"}/auth/signup`,
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        console.log("Signup success navigating to login...");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
      handleError("Something went wrong. Please try again.");
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="container p-5 mt-5">
      <div className="row">
        <div className="col-lg-7 col-md-12 text-center p-5">
          <img
            src="/media/img/signup.png"
            alt="Signup illustration"
            style={{ width: "90%" }}
          />
        </div>
        <div className="col-lg-5 col-md-12 p-5">
          <h1 className="fs-2 mb-3" style={{ fontWeight: 500, color: "#424242" }}>Signup now</h1>
          <p className="text-muted fs-5 mb-4">Or track your existing application</p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="username"
                value={username}
                className="form-control p-3 fs-5"
                placeholder="Username"
                onChange={handleOnChange}
                style={{ borderRadius: "4px", border: "1px solid #ddd" }}
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={email}
                className="form-control p-3 fs-5"
                placeholder="Email address"
                onChange={handleOnChange}
                style={{ borderRadius: "4px", border: "1px solid #ddd" }}
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="password"
                value={password}
                className="form-control p-3 fs-5"
                placeholder="Password"
                onChange={handleOnChange}
                style={{ borderRadius: "4px", border: "1px solid #ddd" }}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary fs-5 mt-2"
              style={{ width: "100%", padding: "12px", backgroundColor: "#387ed1", border: "none" }}
            >
              Continue
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-muted" style={{ fontSize: "14px" }}>
              Already have an account? <Link to="/login" style={{ textDecoration: "none", color: "#387ed1" }}>Login</Link>
            </p>
          </div>
        </div>
      </div>

      <div className="row text-center text-muted mt-5 pt-5" style={{ fontSize: "12px", borderTop: "1px solid #eee" }}>
        <div className="col">
          <p>
            I allow Zerodha to contact me by telephone or email for their various products even if I am registered in the Do Not Call registry.
          </p>
          <p>
            By proceeding, you agree to the <a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>Terms and Conditions</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
