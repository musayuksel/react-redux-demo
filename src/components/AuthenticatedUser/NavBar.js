import React from "react";
import { useSelector } from "react-redux";

export default function NavBar() {
  const cart = useSelector((state) => state.cart);
  const totalAmount = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        border: "1px solid red",
      }}
    >
      LOGO
      <p
        style={{
          border: "1px solid #ddd",
          //   padding: "1rem",
          width: "80px",
          height: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
        }}
      >
        {" "}
        {totalAmount}
      </p>
    </nav>
  );
}
