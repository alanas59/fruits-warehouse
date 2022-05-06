import React from "react";

const Login = () => {
  return (
    <div className="container my-4">
      <div>
        <h2>Please Login</h2>
        <form>
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
        </form>
        <div className="text-center">
          <button className="btn btn-primary">Google Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
