import React, { useState, useEffect } from "react";
import { CgNametag } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase.js"; // Import your firebase auth
import { onAuthStateChanged } from "firebase/auth";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set user state based on authentication
    });

    return () => unsubscribe(); // Clean up subscription on unmount
  }, []);

  function openMenu() {
    setToggle(true);
  }

  function closeMenu() {
    setToggle(false);
  }

  return (
    <>
      <div className="flex items-center justify-between p-10 lg:flex-row">
        <div>
          <Link
            to="/"
            className="text-white font-mono text-3xl tracking-wider flex items-center"
          >
            <CgNametag />
            Portfolio
          </Link>
        </div>

        <div className="space-x-4">
          <div className="ssm:hidden lg:block space-x-2">
            <Link
              to="/skills"
              className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl"
            >
              Көндүмдөр
            </Link>
            <Link
              to="/project"
              className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl"
            >
              Долбоорлор
            </Link>
            <Link
              to="/testimonial"
              className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl"
            >
              Күбөлүктөр
            </Link>
            {user ? ( // If user is logged in, show Profile link
              <Link
                to="/profile"
                className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl"
              >
                Профиль
              </Link>
            ) : (
              <Link
                to="/register"
                className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl"
              >
                Каттоо
              </Link>
            )}
          </div>
          <div className="ssm:block lg:hidden">
            {toggle ? (
              <AiOutlineClose onClick={closeMenu} size={30} className="text-white" />
            ) : (
              <HiMenuAlt1 onClick={openMenu} size={30} className="text-white" />
            )}
          </div>
        </div>
      </div>

      <div className="ssm:block lg:hidden">
        {toggle && (
          <div className="flex flex-col ml-10 space-y-2">
            <Link to="/skills" className="text-white text-xl mb-2 cursor-pointer">
              Көндүмдөр
            </Link>
            <Link to="/project" className="text-white text-xl mb-2 cursor-pointer">
              Долбоорлор
            </Link>
            <Link to="/testimonial" className="text-white text-xl mb-2 cursor-pointer">
              Күбөлүктөр
            </Link>
            {user ? (
              <Link to="/profile" className="text-white text-xl mb-2 cursor-pointer">
                Профиль
              </Link>
            ) : (
              <Link to="/register" className="text-white text-xl mb-2 cursor-pointer">
                Каттоо
              </Link>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;
