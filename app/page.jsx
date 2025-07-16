import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import PopularProducts from "@/components/PopularProducts";
import HeroSection from "@/components/HeroSection";
import BrandShowcase from "@/components/BrandShowcase";
import LuxuryStatement from "@/components/LuxuryStatement";
import BrandProgress from "@/components/BrandProgress";
import BrandVision from "@/components/BrandVision";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandShowcase />
      <FeaturedProducts />
      <LuxuryStatement />
      <PopularProducts />
      <BrandProgress />
      <Categories />
      <BrandVision />
    </>
  );
}
