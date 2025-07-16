import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <Categories />
    </>
  );
}
