export const addToCart = (product) => ({
  type: "ADD_TO_CART",
  product,
});
export const removeFromCart = (productId) => ({
  type: "REMOVE_FROM_CART",
  productId,
});
// [WITHOUT REDUX THUNK]
// export const updateAmount = (productId, quantity) => ({
//   type: "UPDATE_AMOUNT",
//   productId,
//   quantity,
// });
// [REDUX THUNK]
function updateAmountFunction(productId, quantity) {
  return {
    type: "UPDATE_AMOUNT",
    productId,
    quantity,
  };
}
export const updateAmount = (productId, quantity) => async (dispatch) => {
  // do something async
  const response = await fetch("https://api.quotable.io/random");
  const { content } = await response.json();
  console.log(content.toUpperCase());
  setTimeout(() => {
    dispatch(updateAmountFunction(productId, quantity));
  }, 1000);
};
