import React, { useState, useEffect } from "react";
import { signupUser } from "../../api/Api";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

function User() {
  let navigate = useNavigate();
  const [isLoggedIn, setisLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setisLoggedIn(true);
    } else {
      navigate("/login");
    }
  }, [isLoggedIn]);

  return (
    <div>
      {isLoggedIn ? (
        <div className="text-lg text-center">You are logged in successfully!!</div>
      ) : (
        <Login signupUser={signupUser} />
      )}
    </div>
  );
}

export default User;
