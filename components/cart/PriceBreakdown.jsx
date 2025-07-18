"use client";
import React from "react";

const PriceBreakdown = ({ subtotal, shipping, discount, total }) => {
  return (
    <div className="space-y-3 mb-6">
      <div className="flex justify-between">
        <span className="text-gray-600">Subtotal</span>
        <span className="text-gray-900">${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Shipping</span>
        <span className="text-gray-900">
          {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
        </span>
      </div>
      {discount > 0 && (
        <div className="flex justify-between text-green-600">
          <span>Discount (10%)</span>
          <span>-${discount.toFixed(2)}</span>
        </div>
      )}
      {shipping === 0 && (
        <p className="text-sm text-green-600">
          ✓ Free shipping on orders over $200
        </p>
      )}
      <div className="border-t pt-3">
        <div className="flex justify-between text-xl font-light">
          <span>Total</span>
          <span className="text-gray-900">${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default PriceBreakdown;
