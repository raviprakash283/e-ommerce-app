import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom"
import { useDispatch} from "react-redux";
import {  register} from '../../actions/userAction'
import "./LoginSignup.css"

const Register = () => {

    const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const submitHandler = async (e) => {
   
    e.preventDefault();
   // const user = ;

    dispatch(register ({name, email , password}));


  };

  

  return (
     <div className="LoginSignUpContainer">
    <div className="LoginSignUpBox">
      <section>
        <form onSubmit={submitHandler} className="signupForm">
          <input
            className="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            autocomplete="off"
            required
          />
          <input
          className="email"
            type="email"
            placeholder="Email"
            required
            value={email}
            autocomplete="off"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
          className="password"
            type="password"
            required
            placeholder="Password"
            value={password}
            autocomplete="off"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="signUpBtn">Sign Up</button>
          <h4>Or</h4>
          <Link  className='link' to="/login">Log In</Link>
        </form>
      </section>
    </div>
    </div>
  );
};

export default Register;
