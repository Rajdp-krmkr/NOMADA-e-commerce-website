import React from "react";
import Image from "next/image";
import Link from "next/link";

const PopularProducts = () => {
  const popularProducts = [
    {
      id: 1,
      name: "Bottega Veneta Roma",
      image: "/assests/bags/bag_black.png",
      price: "$299",
      link: "/product/bottega-veneta-roma",
      trending: "#1",
    },
    {
      id: 2,
      name: "Hermès Saint-Tropez",
      image: "/assests/bags/bag_brown.png",
      price: "$399",
      link: "/product/hermes-saint-tropez",
      trending: "#2",
    },
    {
      id: 3,
      name: "Chanel Marseille",
      image: "/assests/bags/bag_pitch.png",
      price: "$349",
      link: "/product/chanel-marseille",
      trending: "#3",
    },
    {
      id: 4,
      name: "Prada Barcelona",
      image: "/assests/bags/bag_purple.png",
      price: "$379",
      link: "/product/prada-barcelona",
      trending: "#4",
    },
  ];

  return (
    <section className="font-babas-neue px-4 py-8">
      <h1 className="text-4xl text-center mb-8">Popular Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6 max-w-6xl mx-auto">
        {popularProducts.map((product) => (
          <div
            key={product.id}
            className={` rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300`}
          >
            <Link href={product.link}>
              <div className="aspect-square relative overflow-hidden">
                {/* Trending Badge */}
                <div className="absolute top-2 right-2 bg-red-500 text-white h-9 w-9 rounded-full text-lg z-10 flex items-center justify-center shadow-md">
                  <span>{product.trending}</span>
                </div>

                {/* Background blur effect */}
                <Image
                  src={product.image}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="object-center relative -top-1/2 -left-1/2 opacity-50 blur-3xl hover:scale-105 transition-transform duration-300 min-w-[600px]"
                />

                {/* Main product image */}
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3">
                <h3 className="text-xl  mb-1">{product.name}</h3>
                <p className="text-base text-gray-600">{product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
