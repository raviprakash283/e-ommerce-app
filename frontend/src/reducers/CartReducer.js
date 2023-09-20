import CartItemCard from "../component/Cart/CartItemCard";

  export const cartReducer = (
    state = [],
    action
  ) => {
    switch (action.type) {
      case "ADD":
        const item = action.payload;
  
        const isItemExist = state.find(
          (i) => i.product === item.product
        );
  
        // if (isItemExist) {
        //   return {
        //     ...state,
        //        state.map((i) =>
        //       i.product === isItemExist.product ? item : i
        //     ),
        //   };

        if(isItemExist ){
            state.forEach((i) => {
              if (i.product === action.payload.product) i.quantity =item.quantity;
            });

              return([...state]);
          }


         else {
          return  ([...state, item]);
        }
  
      case "Remove":

        return  state.filter( (i)=> i.product !== action.payload);
  
      
      default:
        return state;
    }
  };
  