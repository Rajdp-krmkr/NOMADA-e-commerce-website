"use client";
import React from "react";

const PromoCodeSection = ({ 
  promoCode, 
  setPromoCode, 
  isPromoApplied, 
  applyPromoCode 
}) => {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Promo Code
      </label>
      <div className="flex space-x-2">
        <input
          type="text"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          placeholder="Enter code"
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          disabled={isPromoApplied}
        />
        <button
          onClick={applyPromoCode}
          disabled={isPromoApplied}
          className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Apply
        </button>
      </div>
      {isPromoApplied && (
        <p className="text-green-600 text-sm mt-2">
          ✓ Promo code applied
        </p>
      )}
    </div>
  );
};

export default PromoCodeSection;
