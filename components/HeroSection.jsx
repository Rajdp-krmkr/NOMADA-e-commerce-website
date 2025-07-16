import React from "react";
import ImageCarousel from "./ImageCarousel";
import { getCarouselImages } from "@/data/products";

const HeroSection = () => {
  // Get dedicated carousel images for hero section
  const carouselImages = getCarouselImages();

  // Transform carousel images to match ImageCarousel component format
  const heroImages = carouselImages.map((image) => ({
    src: image.src,
    alt: image.alt,
    link: image.link,
    title: image.title,
    subtitle: image.subtitle,
  }));

  return (
    <section className="w-full">
      <ImageCarousel images={heroImages} autoSlideInterval={4000} />
    </section>
  );
};

export default HeroSection;
