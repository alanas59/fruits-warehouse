import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
const Login = () => {
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);

  if (user || user1) {
    navigate(from, { replace: true });
  }

  if(loading || loading1){
    return <Loading></Loading>
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
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
    </div>
  );
};

export default Login;
