"use client";
import React from "react";

const CartHeader = ({ cartItemsCount }) => {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-light text-gray-900 mb-2">Shopping Cart</h1>
      <p className="text-gray-600">
        {cartItemsCount} item{cartItemsCount !== 1 ? "s" : ""} in your cart
      </p>
    </div>
  );
};

export default CartHeader;
