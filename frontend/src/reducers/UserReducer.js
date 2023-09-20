export const userReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    
    case "Login_Success":
    case  "Signup_Success":
    
      return {
        ...state,
      
        isAuthenticated: true,
        user: action.payload,
      };

    case "Logout_Success":
      return {
      
        user: null,
        isAuthenticated: false,
      }

   
 
    default:
      return state;
  }
};
