// Importing necessary modules and styles
"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { auth } from "../fb";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";

// Login component
const Login = () => {
  // Next.js router hook
  const router = useRouter();

  // Refs for email and password inputs
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();

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

  // Login function
  const handleLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Firebase authentication
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Successfully signed in
        const user = userCredential.user;
        alert("Signed in successfully");
        router.push("/home");
        // Reset the form fields after successful login
        setFormReset(true);
      })
      .catch((error) => {
        // Handle login error
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Login failed: Invalid Credentials");
      });
  };

  // Render the Login component
  return (
    <div>
      {/* Login form */}
      <div className="frm_main border-2 border-slate-100 p-10 shadow-2xl bg-gray-100">
        <h2 className="login1"> User Login</h2>
        <form onSubmit={handleLogin}>
          {/* Email input */}
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

          {/* Password input */}
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

          {/* Login button */}
          <button type="submit" className="btnfrm ">
            Login
          </button>

          {/* Registration link */}
          <p>
            <br />
            Don't have an account? <br />
            <Link className="text-blue-500" href="/register">
              Register Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
