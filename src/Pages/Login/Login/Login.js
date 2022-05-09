import React, { useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  if (user || user1) {
    // navigate(from, { replace: true });
  }

  if (loading || loading1) {
    return <Loading></Loading>;
  }

  const handlePasswordRest = async (email) => {
    await sendPasswordResetEmail(email);
    toast("Sent email");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    setEmail(email);
    const password = event.target.password.value;
    await signInWithEmailAndPassword(email, password);
    fetch("http://localhost:5000/login", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email}),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        localStorage.setItem('accessToken',data.accessToken);
        navigate(from, { replace: true });
      });
  };

  return (
    <div className="container my-4">
      <div>
        <h2>Please Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              required
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <div className="mt-2">
            <p>
              New to fruits warehouse?
              <Link className="text-danger" to="/register">
                Please Register
              </Link>
            </p>
          </div>
          <div className="mt-2">
            <p>
              Forget Password?
              <span
                className="text-danger"
                onClick={() => handlePasswordRest(email)}
              >
                Reset Password
              </span>
            </p>
          </div>
          <p className="mt-2 text-danger">{error?.message}</p>
          <p className="mt-2 text-danger">{error1?.message}</p>
        </form>
        <div className="text-center">
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-primary"
          >
            Google Sign In
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
