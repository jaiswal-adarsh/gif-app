"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import { auth } from "../fb";
import { useRouter } from "next/navigation";
import { redirect } from 'next/navigation';
import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";

const Login = () => {
  const router = useRouter();
  const emailRef = useRef();
  const passwordRef = useRef();

  const Login = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("signed in successfully");
        router.push("/home")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("failed");
      });
  };

  return (
    <div>
      {/* <Home/> */}

      <div className="frm_main border-2 border-slate-100 p-10 shadow-2xl bg-gray-100">
        <h2 className="login1"> User Login</h2>
        <form onSubmit={Login}>
          <label>
            <h2 className="text-xl font-semibold">Email:</h2>
            <input
              className="inptfrm1 border border-slate-400 p-3"
              type="email"
              placeholder="Username or Email"
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
              placeholder="Password"
              ref={passwordRef}
              required
            />
          </label>
          <br />
          <button type="submit" className="btnfrm ">
            Login
          </button>
          <p>
            <br></br>
            Don't have an account? <br />
            <Link className="text-blue-500" href="/register">
              Register Now
            </Link>
            {/* <a onClick={() => router.push('/')}>Register Now</a> */}
          </p>
        </form>
      </div>
      {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
    </div>
  );
};

export default Login;
