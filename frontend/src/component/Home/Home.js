import React, { Fragment, useEffect, useState } from "react";
import "./Home.css";
import ProductCard from "./ProductCard";
import MetaData from "../layout/MetaData";
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]); // Use state to store the fetched products

  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/products', {
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
    <Fragment>
      <MetaData title="ECOMMERCE" />
      <div className="banner">
        <p>Welcome to Ecommerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>
        <a href="#container">
          <button>Scroll</button>
        </a>
      </div>

      <h2 className="homeHeading">Featured Products</h2>

      <div className="container" id="container">
        {
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        }
      </div>
    </Fragment>
  );
};

export default Home;
