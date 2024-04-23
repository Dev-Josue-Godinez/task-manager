import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const LoginPage = (props: Props) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1>LoginPage</h1>
        <Link to="/home">
          <button>Log In</button>
        </Link>
      </div>
    </>
  );
};

export default LoginPage;
