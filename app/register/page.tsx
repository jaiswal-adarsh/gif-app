"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../fb";
import "./pages.css";
import { FirebaseError } from "firebase/app";

import { createUserWithEmailAndPassword, UserCredential } from "firebase/auth";

const Register = () => {
  const router = useRouter();
  const emailRef = useRef();
  const passwordRef = useRef();

  const Register = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        alert("SignUp Successful");
        router.push("/login")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("SignUp Failed");
        // ..
      });
  };

  return (
    <div>
      <div className="rfrm_main border-2 border-slate-100 p-10 shadow-2xl bg-gray-100">
        <h2 className="reg1">User Registeration</h2>
        <form onSubmit={Register}>
          <label>
            <h2 className="text-xl font-semibold">Email:</h2>
            <input
              className="inptfrm1 border border-slate-400 p-3"
              type="email"
              ref={emailRef}
              required
            />
          </label>
          <br />
          <label>
            <h2 className="text-xl font-semibold">Password:</h2>
            <input
              className="inptfrm2 border border-slate-400 p-3"
              type="password"
              ref={passwordRef}
              required
            />
          </label>
          <br />
          <button type="submit" className="btnfrm ">
            Register
          </button>
        </form>
        <p>
          <br></br>
          Have an account? <br />
          <a
            href="/login"
            className="text-green-500"
            onClick={() => router.push("/login")}
          >
            Login Now
          </a>
        </p>
        {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
      </div>
    </div>
  );
};

export default Register;
