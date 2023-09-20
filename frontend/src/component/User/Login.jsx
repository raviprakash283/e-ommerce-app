
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, register} from '../../actions/userAction'
 import './LoginSignup.css'

const Login = () => {

    const dispatch = useDispatch();


 
    

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler =  (e) => {
    e.preventDefault();
   
    dispatch(login(email, password));
     setEmail('');
     setPassword('');
  };

 

  return (
     <div className="LoginSignUpContainer">
    <div className="LoginSignUpBox">
      <section>
        <form onSubmit={submitHandler} className="loginForm">
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
          <button  type="submit" className="loginBtn">
            Login
          </button>
            <div> <h4>Or</h4></div>
             
            <Link  className='link' to="/register">Sign Up</Link>

        </form>
      </section>
    </div>

     </div>
  );
};

export default Login;
