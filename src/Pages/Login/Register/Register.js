import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    if(user){
      console.log(user);
    }
    const handleSubmit = event =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email,password);
        createUserWithEmailAndPassword(email, password,{sendEmailVerification:true});
      }
    return (
        <div className="container my-4">
        <div>
          <h2>Please Register</h2>
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
              Register
            </button>
          </form>
        
        </div>
      </div>
    );
};

export default Register;