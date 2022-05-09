import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth);
    navigate('/login');
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-3">
      <div className="container">
        <Link className="navbar-brand" to="/">
          My Fruits Warehouse
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/blogs">
                Blogs
              </Link>
            </li>
            {user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/manage-page">
                    Manage Items
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/add-item">
                    Add Item
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/my-items">
                    My items
                  </Link>
                </li>
                <li className="nav-item">
                  <button onClick={logout} className="btn btn-primary">
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
