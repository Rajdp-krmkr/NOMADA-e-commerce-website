import React from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

const FeaturedProducts = () => {
  // Get first 4 products as featured products
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="font-babas-neue px-4 py-8">
      <h1 className="text-4xl text-center mb-8">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6 max-w-6xl mx-auto">
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className={` rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300`}
          >
            <Link href={`/product/${product.slug}`}>
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="object-center relative -top-1/2 -left-1/2 opacity-50 blur-3xl hover:scale-105 transition-transform duration-300 min-w-[600px]"
                />
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3">
                <h3 className="text-xl mb-1">{product.name}</h3>
                <p className="text-base text-gray-600">${product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
