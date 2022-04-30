import React, { useState } from "react";
import Input from "../../subcomponents/Input";
import { Link, useNavigate } from "react-router-dom";

function Login({ signupUser, link }) {
  let navigate = useNavigate();
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const { name, price } = inputValue;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(inputValue);
  };

  const handleClick = async () => {
    const response = await signupUser(inputValue);
    console.log(response)
    const json = await response;
    // console.log(json)
    if (json.success) {
      localStorage.setItem("token", json.authToken);
      console.log("Login successful");
      navigate(link);
      // console.log(json.authToken)
    } else {
      // props.showAlert('Invalid credentials', 'danger')
      console.log("Please enter valid email and password");
    }
  };
  return (
    <div className="w-full mx-auto max-w-xs">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <Input
          name="email"
          type="email"
          placeholder="sahil@sahil.com"
          label="Your Email"
          value={name}
          onChange={handleChange}
        />
        <Input
          name="password"
          type="password"
          placeholder="password"
          label="Your Password"
          value={name}
          onChange={handleChange}
        />
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => handleClick()}
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
