import React from "react";
import "./loginSignUp.css";

function LoginSignUp() {
  return (
    <div className="loginSignUp">
      <ul className="loginSignUp_list">
        <li className="active">SignUp</li>
        <li>Login</li>
        <div></div>
        <li>Host your Home</li>
        <li>Host an Experience</li>
        <li>Help</li>
      </ul>
    </div>
  );
}

export default LoginSignUp;
