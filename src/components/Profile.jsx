// src/components/Profile.jsx
import React, { useEffect, useState } from "react";
import { auth } from "../firebase/firebase.js";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.js";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const Profile = () => {
  const [avatarURL, setAvatarURL] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!auth.currentUser) {
          throw new Error("User is not authenticated.");
        }

        const userDocRef = doc(db, "users", auth.currentUser.uid);
        const userSnap = await getDoc(userDocRef);
        
        if (userSnap.exists()) {
          setUserData(userSnap.data());
          if (userSnap.data().avatarURL) {
            const storage = getStorage();
            const avatarRef = ref(storage, userSnap.data().avatarURL);
            const url = await getDownloadURL(avatarRef);
            setAvatarURL(url);
          }
        } else {
          setError("User data not found.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="loader">Loading...</div> {/* Consider using a spinner or some animation */}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-10">
      <div className="bg-white rounded-lg shadow-md p-10 max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-5">Ваш профиль</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {avatarURL && (
          <Link to="/profile/avatar">
            <img
              src={avatarURL}
              alt="Avatar"
              className="w-32 h-32 rounded-full mb-4 border-2 border-gray-300 cursor-pointer"
            />
          </Link>
        )}
        {userData && (
          <>
            <p className="text-gray-700">Имя: {userData.displayName || "Не указано"}</p>
            <p className="text-gray-700">Эл. почта: {userData.email}</p>
          </>
        )}
        <div className="flex space-x-4 mt-5">
          <Link to="/" className="text-indigo-600 hover:underline">
            На главную
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Выйти
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
