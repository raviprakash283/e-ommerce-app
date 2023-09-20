import React, { Fragment } from "react";
import "./Cart.css";
import CartItemCard from "./CartItemCard";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart, removeItemsFromCart } from "../../actions/cartAction";
import { logout } from "../../actions/userAction";
import {loadStripe} from '@stripe/stripe-js';
import axios from "axios";


//import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { Link } from "react-router-dom";
import Login from "../User/Login";

const Cart = () => {

  const dispatch = useDispatch();
  const cartItems  = useSelector((state) => state.cart);
  const {isAuthenticated} = useSelector(  (state) => state.user);

  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const deleteCartItems = (id) => {
    dispatch(removeItemsFromCart(id));
  };

  const checkoutHandler =  async()=>{
    const stripe = await loadStripe("pk_test_51NoPYESARFgxIzE4yVVsA86OMH4qamlHtpLXlQaFZrQN3x38hKUbkejCv3UAOih2RCOMz1xKzFfzewfF4tqCB66Z00fEd0RX3E");

   
    const session =  axios.post(`http://localhost:8000/api/v1/payment`, cartItems,
    {
      withCredentials: true,
    }).then( (session)=>{
        window.location= session.data;
    })

   
    
    

    // const result = stripe.redirectToCheckout({
       
    //     sessionId: session.data

        
    // });

    // const body = {
    //     products:cartItems
    // }
    // const headers = {
    //     "Content-Type":"application/json"
    // }
    // const response = await fetch("http://localhost:8000/api/v1/payment",{
    //     method:"POST",
    //     headers:headers,
    //     body:JSON.stringify(body)
    // });

    // const session = await response.json();

    // const result = stripe.redirectToCheckout({
    //     sessionId:session.id
    // });
    
    
    // if(result.error){
    //     console.log(result.error);
    // }
}

const logoutHandler = () =>{
    dispatch(logout());
}


  return (
    isAuthenticated === true ?
    (<Fragment>
      {cartItems.length === 0 ? (
        <div className="emptyCart">
          

          <h3>No Product in Your Cart</h3>
          <Link to="/products">View Products</Link>
        </div>
      ) : (
        <Fragment>
          <div className="cartPage">
            <div className="cartHeader">
              <p>Product</p>
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>

            {cartItems &&
              cartItems.map((item) => (
                <div className="cartContainer" key={item.product}>
                  <CartItemCard item={item} deleteCartItems={deleteCartItems} />
                  <div className="cartInput">
                    <button
                      onClick={() =>
                        decreaseQuantity(item.product, item.quantity)
                      }
                    >
                      -
                    </button>
                    <input type="number" value={item.quantity} readOnly />
                    <button
                      onClick={() =>
                        increaseQuantity(
                          item.product,
                          item.quantity,
                          item.stock
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                  <p className="cartSubtotal">{`₹${
                    item.price * item.quantity
                  }`}</p>
                </div>
              ))}

            <div className="cartGrossProfit">
              <div></div>
              <div className="cartGrossProfitBox">
                <p>Gross Total</p>
                <p>{`₹${cartItems.reduce(
                  (acc, item) => acc + item.quantity * item.price,
                  0
                )}`}</p>
              </div>
              <div></div>
               <div className="checkOutBtn">
                <button onClick={checkoutHandler}>Check Out</button>
              </div> 

            </div>
          </div>

          <button className="logout-btn" onClick={logoutHandler}>Logout</button>
        </Fragment>
      )}
    </Fragment>) : <Login/>


  );
};

export default Cart;
