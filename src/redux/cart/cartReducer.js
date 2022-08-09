const defaultCart = [
  {
    id: 1,
    productName: "Product 1",
    quantity: 1,
  },
  {
    id: 2,
    productName: "Product 2",
    quantity: 3,
  },
  {
    id: 3,
    productName: "Product 2",
    quantity: 2,
  },
];
// [REDUX REDUCER]
export const cartReducer = (state = defaultCart, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.product];
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.productId);
    case "UPDATE_AMOUNT":
      return state.map((item) => {
        if (item.id === action.productId) {
          return {
            ...item,
            quantity: action.quantity,
          };
        }
        return item;
      });
    default:
      return state;
  }
};
