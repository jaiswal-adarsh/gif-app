// Importing necessary modules and styles
"use client";
import { useEffect, useRef, useState } from "react";
import { auth } from "../fb";
import { useRouter } from "next/navigation";
import "./pages.css";
import { createUserWithEmailAndPassword } from "firebase/auth";


// Register component
const Register = () => {
  // Next.js router hook
  const router = useRouter();

  // Refs for email and password inputs
  const emailRef = useRef();
  const passwordRef = useRef();

  // State to manage form reset
  const [formReset, setFormReset] = useState(false);

  // Effect to reset form fields on mount
  useEffect(() => {
    if (formReset) {
      emailRef.current.value = "";
      passwordRef.current.value = "";
      setFormReset(false);
    }
  }, [formReset]);

  // Registration function
  const handleRegister = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Firebase create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Successfully signed up
        const user = userCredential.user;
        alert("Sign-up Successful");
        router.push("/login");
        // Reset the form fields after successful registration
        setFormReset(true);
      })
      .catch((error) => {
        // Handle registration error
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Sign-up Failed");
      });
  };

  // Render the Register component
  return (
    <div>
      {/* Registration form */}
      <div className="rfrm_main border-2 border-slate-100 p-10 shadow-2xl bg-gray-100">
        <h2 className="reg1">User Registration</h2>
        <form onSubmit={handleRegister}>
          {/* Email input */}
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

          {/* Password input */}
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

          {/* Register button */}
          <button type="submit" className="btnfrm">
            Register
          </button>
        </form>

        {/* Login link */}
        <p>
          <br />
          Have an account? <br />
          <a
            href="/login"
            className="text-green-500"
            onClick={() => router.push("/login")}
          >
            Login Now
          </a>
        </p>

        {/* Optional error display */}
        {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
      </div>
    </div>
  );
};

export default Register;
