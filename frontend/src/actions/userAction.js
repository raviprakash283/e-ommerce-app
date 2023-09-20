
  import axios from 'axios';
  

  export const login = (email, password) => async (dispatch) => {
    try {
      
  
      //const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } = await axios.post( `http://localhost:8000/api/v1/login`,
        { email, password },
        {
          withCredentials: true,
        }
      );

      console.log(data);
  
      dispatch({ type: "Login_Success", payload: data.user });
    } catch (error) {
       // dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });

       console.log(error);
    }
  };



  export const register = (userData) => async (dispatch) => {

    axios.post('http://localhost:8000/api/v1/register',userData ,
    {
      withCredentials: true,
    }
    )
    .then(response => {
        console.log(response.data);
        dispatch({ type: "Signup_Success", payload: response.data.user });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });


    // try {
      
  
    //   const config = { headers: { "Content-Type": "multipart/form-data" }};
    //   console.log(userData);
  
    //   const { data } = await axios.post('http://localhost:8000/api/v1/register', userData,config);
  
    //   dispatch({ type: "Signup_Success", payload: data.user });
    // } catch (error) {
    //      console.log(error);
    // }
  };


  export const logout = () => async (dispatch) => {
    try {
      await axios.get('http://localhost:8000/api/v1/logout');
  
      dispatch({ type: "Logout_Success" });
    } catch (error) {
          console.log(error);
    }
  };