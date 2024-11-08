// src/components/Registration.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/firebase.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null); // State for the avatar file
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const storage = getStorage();
      let avatarURL = "";

      if (avatar) {
        const avatarRef = ref(storage, `avatars/${user.uid}/${avatar.name}`);
        await uploadBytes(avatarRef, avatar);
        avatarURL = await getDownloadURL(avatarRef);
        console.log("Avatar URL:", avatarURL);
      }

      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        displayName: user.displayName || "Не указано",
        avatarURL: avatarURL,
        createdAt: new Date(),
      });

      navigate("/profile"); // Redirect to profile after registration
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-10">
      <div className="bg-white rounded-lg shadow-md p-10 max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-5">Регистрация</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleRegistration}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Эл. почта</label>
            <input
              type="email"
              placeholder="Ваш электронный адрес"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Пароль</label>
            <input
              type="password"
              placeholder="Ваш пароль"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Аватар</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setAvatar(e.target.files[0])}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Зарегистрироваться
          </button>
        </form>
        <p className="mt-5">
          Уже зарегистрированы?{" "}
          <Link to="/login" className="text-indigo-600 hover:underline">
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
