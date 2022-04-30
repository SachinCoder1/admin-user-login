import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate();

  const [isLoggedIn, setisLoggedIn] = useState(false);

        const handleLogout = ()=>{
        localStorage.removeItem('token')
        navigate('/login')
        setisLoggedIn(false)
    }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setisLoggedIn(true);
      
    } else {
      navigate("/login");
      setisLoggedIn(false)
    }
  }, [isLoggedIn]);


  return (
    <div className="w-full py-3 px-5 gap-x-5 flex items-center bg-gray-200 text-black">
      <Link className="text-2xl" to="/">
        Admin User Hub
      </Link>
      <Link className="border-b-2 border-gray-200 hover:border-black" to="/">
        User
      </Link>
      {isLoggedIn ? (
        <button
          className="border-b-2 border-gray-200 hover:border-black"
          onClick={handleLogout}
        >
          Logout
        </button>
      ) : (
        <Link
          className="border-b-2 border-gray-200 hover:border-black"
          to="/admin"
        >
          Admin
        </Link>
      )}
    </div>
  );
}

export default Navbar;
