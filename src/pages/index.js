import Image from "next/image";
import AppDivider from "@/components/app-divider";
import { motion } from "motion/react";
import AppButton from "@/components/app-button";
import AppCircularButton from "@/components/app-circular-button";
import GithubIcon from "@/components/icons/github-icon";
import WebIcon from "@/components/icons/web-icon";
import { MailIcon } from "lucide-react";
import TelephoneIcon from "@/components/icons/telephone-icon";
import useSpotlightEffect from "@/hooks/use-spotlight-effect";
import AppSectionDivider from "@/components/app-section-divider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

import BgApp from "@/assets/bg.png";
import ProfileDetails from "@/components/molecules/profile-details";
import HomeSection from "@/components/molecules/home/home-section";
import ProfileImage from "@/components/molecules/profile-image";
import AboutSection from "@/components/molecules/about/about-section";
import Experience from "@/components/molecules/experiences/experience";

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
    <div className="flex flex-col xl:flex-row h-screen snap-y snap-mandatory scrollable">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full z-0 pointer-events-none"
      />
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

      <div
        id="main-section"
        className="w-full h-screen snap-start xl:overflow-y-scroll hidden-scroll p-6 xl:p-30"
      >
        <div className="flex flex-col gap-4 max-w-[1500px] mx-auto h-auto text-white ">
          <HomeSection />
          <AboutSection />
          <Experience />
        </div>
      </div>
    </div>
  );
}
