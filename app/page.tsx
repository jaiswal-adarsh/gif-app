// Importing necessary modules and components
"use client";
import Link from "next/link";
import Register from "./register/page";
import Login from "./login/page";

// Pages component
const Pages = () => {
  return (
    <div>
      {/* Render the Login component */}
      <Login />
    </div>
  );
};

export default Pages;
