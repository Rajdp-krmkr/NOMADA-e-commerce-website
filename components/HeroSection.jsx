import React from "react";
import ImageCarousel from "./ImageCarousel";
import CarousalImg from "../public/assests/CarousalBag1.png";

const HeroSection = () => {
  // Hero carousel images data
  const heroImages = [
    {
      src: CarousalImg,
      alt: "Premium Nómada Bag Collection",
      link: "/shop",
    },
    {
      src: CarousalImg, // You can replace these with different images
      alt: "Luxury Travel Bags",
      link: "/shop/travel",
    },
    {
      src: CarousalImg,
      alt: "Handcrafted Leather Bags",
      link: "/shop/leather",
    },
    {
      src: CarousalImg,
      alt: "Modern Design Bags",
      link: "/shop/modern",
    },
  ];

  return (
    <section className="w-full">
      <ImageCarousel images={heroImages} autoSlideInterval={4000} />
    </section>
  );
};

export default HeroSection;
