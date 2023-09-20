import React, { Fragment,useEffect, useState } from "react";
import axios from "axios"
import { useParams,Link } from 'react-router-dom'
import Login from "../User/Login";

import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";


import { addItemsToCart } from "../../actions/cartAction";
import {logout} from   "../../actions/userAction";






const ProductDetails = () => {
  const dispatch = useDispatch();
  const {isAuthenticated} = useSelector(  (state) => state.user);
 
  const [product, setProduct] =useState({});

  const { id } = useParams();

    axios.get(`http://localhost:8000/api/v1/product/${id}`)
    .then((res)=> {
         setProduct(res.data.product)
    })
    .catch( (err)=>{
        console.log(err);
    })

//   const { product } = useSelector(
//     (state) => state.productDetails
//   );

  

  
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const increaseQuantity = () => {
   // if (product.Stock <= quantity) return;

    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
  };

  const addToCartHandler = () => {
    dispatch(addItemsToCart(id, quantity));
    setQuantity(1);
    
    alert("Item Added To Cart")
  };

    const logoutHandler = () =>{
        dispatch(logout());
    }


  return ( isAuthenticated === true ?
      (<Fragment>
      
        <Fragment>
        
          <div className="ProductDetails">
         
            <div>
              {} 
            </div>
            <div>
                   
              <div className="detailsBlock-1">
                <h2>{product.name}</h2>
                <p>Product # {product._id}</p>
              </div>
              <div className="detailsBlock-2">
                {/* <Rating {...options} /> */}

                <span className="detailsBlock-2-span">
                  {" "}
                  ({product.numOfReviews} Reviews)
                </span>
              </div>
              <div className="detailsBlock-3">
                <h1>{`₹${product.price}`}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button onClick={decreaseQuantity}>-</button>
                    <input readOnly type="number" value={quantity} />
                    <button onClick={increaseQuantity}>+</button>
                  </div>
                  <button
                    disabled={product.stock < 1 ? true : false}
                    onClick={addToCartHandler}
                  >
                    Add to Cart
                  </button>
                </div>

                <p>
                  Status:
                  <b className={product.stock < 1 ? "redColor" : "greenColor"}>
                    {product.Stock < 1 ? "OutOfStock" : "InStock"}
                  </b>
                </p>
              </div>

              <div className="detailsBlock-4">
                Description : <p>{product.description}</p>
              </div>
              <div className="Go-To-Cart"> <Link className="lk" to={"/Cart"}> Go To Cart</Link> </div>
            </div>
              
          
          
            
          </div>

          
           <button className="logout-btn" onClick={logoutHandler}>Logout</button>
        
             

         
        </Fragment>
    
    </Fragment>) : <Login/>
  );
};

export default ProductDetails;