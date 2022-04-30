import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signupAdmin } from "../../api/Api";
import Login from "../user/Login";

function Admin() {
  let navigate = useNavigate();
  const [isLoggedIn, setisLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setisLoggedIn(true);
    } else {
      navigate("/adminlogin");
    }
  }, []);
  return (
    <div>
      {isLoggedIn ? (
        <div className="text-lg text-center">
          You are logged in successfully!!
        </div>
      ) : (
        <Login signupUser={signupAdmin} />
      )}
    </div>
  );
}

export default Admin;
