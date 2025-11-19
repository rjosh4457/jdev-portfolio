import { motion } from "motion/react";
import useSpotlightEffect from "@/hooks/use-spotlight-effect";

import "swiper/css";
import "swiper/css/autoplay";

import BgApp from "@/assets/bg.png";
import ProfileDetails from "@/components/molecules/profile-details";
import HomeSection from "@/components/molecules/home/home-section";
import ProfileImage from "@/components/molecules/profile-image";
import AboutSection from "@/components/molecules/about/about-section";
import Experience from "@/components/molecules/experiences/experience";
import SideBar from "@/components/molecules/side-bar";

const boxShadowRight = {
  boxShadow: "105px 0px 250px -147px rgba(242, 133, 24, 1)",
};

export default function Home() {
  const spotlightConfig = {
    radius: 200,
    brightness: 0.15,
    color: "#ffffff",
    smoothing: 0.1,
  };

  const canvasRef = useSpotlightEffect(spotlightConfig);
  return (
    <div className="flex flex-col xl:flex-row h-screen snap-y snap-mandatory overflow-scroll relative">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full z-0 pointer-events-none"
      />
      <motion.div
        className="absolute z-1 right-20 top-1/2 -translate-y-1/2 hidden xl:block"
        style={boxShadowRight}
      >
        <SideBar />
      </motion.div>
      <div
        className="flex relative shrink-0 xl:w-[480px] h-screen snap-start"
        style={boxShadowRight}
      >
        <div className="flex justify-center w-full m-10">
          <div className="w-full md:w-[380px] lg:mt-20">
            <ProfileImage />
            <ProfileDetails />
          </div>
        </div>
      </div>
      <div id="main-section" className="w-full h-screen snap-start">
        <div className="flex flex-col gap-4 h-screen scrollable">
          <div className="max-w-[1000px] mx-auto px-6 xl:px-0 xl:my-30">
            <HomeSection />
            <AboutSection />
            <Experience />
          </div>
        </div>
      </div>
    </div>
  );
}
