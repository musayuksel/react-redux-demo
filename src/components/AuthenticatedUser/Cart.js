import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function Cart() {
  const styles = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  };
  const cart = useSelector((state) => state.cart);

  return (
    <section style={styles}>
      {cart.map((item) => (
        <CartItem
          key={item.id}
          productName={item.productName}
          productQuantity={item.quantity}
          productId={item.id}
        />
      ))}
    </section>
  );
}
