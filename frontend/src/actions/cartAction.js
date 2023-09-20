
  import axios from "axios";
  
  // Add to Cart
  export const addItemsToCart = (id, quantity) => async (dispatch,getState) => {
    //const { data } = await axios.get(`/api/v1/product/${id}`);
  
    try {
        const { data } = await axios.get(`/api/v1/product/${id}`);
    
        if (data.product) {
          dispatch({
            type: "ADD",
            payload: {
              product: data.product._id,
              name: data.product.name,
              price: data.product.price,
              image: data.product.images[0].url,
              stock: data.product.Stock,
              quantity,
            },
          });
        } else {
          // Handle the case where the product data is not available
          // This could be due to a 404 or another error
          console.error("Product not found");
        }
      } catch (error) {
        // Handle any network request errors here
        console.error("Error adding item to cart:", error);
      }
    
  
    localStorage.setItem("cartItems", JSON.stringify(getState().cart));
  };
  
  // REMOVE FROM CART
  export const removeItemsFromCart = (id) => async (dispatch) => {
    dispatch({
      type: "Remove",
      payload: id,
    });
  
     //localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  };

//    export const dec = (id) => async(dispatch)=> {
//     dispatch({
//         type: "DEC",
//         payload: id,
//       });
     
 //  }