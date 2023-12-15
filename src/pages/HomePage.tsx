// HomePage.tsx
import React from "react";
import NavigationBar from "../components/common/NavigationBar";
import MainBanner from "../components/sections/MainBanner";
import FeaturesSection from "../components/sections/FeaturesSection";
import CountriesList from "../components/sections/CountriesList";
import MapSection from "../components/sections/MapSection";
import CarouselSection from "../components/sections/CarouselSection";
import Footer from "../components/common/Footer";

const HomePage: React.FC = () => {
  return (
    <div>
      <NavigationBar />
      <CarouselSection />
      <MainBanner />
      <FeaturesSection />
      <MapSection />
      <CountriesList />
      <Footer />
    </div>
  );
};

export default HomePage;
