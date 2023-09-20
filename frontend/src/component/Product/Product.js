import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import "./Products.css";


import ProductCard from "../Home/ProductCard";





const Product = () => {

    const [products, setProducts] = useState([]); // Use state to store the fetched products

    useEffect(() => {
      axios.get('http://localhost:8000/api/v1/products',{
        withCredentials: true,
      })
        .then(response => {
          // Update the state with the fetched products
          setProducts(response.data.products);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []); // Empty dependency array means this effect runs once after the component mounts
  
  return (
    <div   >
               <div className="container" id="container">
         {
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        }
      </div>
    </div>
  )
}

export default Product