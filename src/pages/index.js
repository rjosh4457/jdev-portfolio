import Image from "next/image";
import ProfileImage from "@/assets/profile-image.jpg";
import AppDivider from "@/components/app-divider";
import { motion } from "motion/react";
import AppButton from "@/components/app-button";
import AppCircularButton from "@/components/app-circular-button";
import GithubIcon from "@/components/icons/github-icon";
import WebIcon from "@/components/icons/web-icon";
import { MailIcon } from "lucide-react";
import TelephoneIcon from "@/components/icons/telephone-icon";

const boxShadowRight = {
  boxShadow: "105px 0px 250px -147px rgba(242, 133, 24, 1)",
};

export default function Home() {
  return (
    <div className="flex flex-col xl:flex-row h-screen snap-y snap-mandatory scrollable">
      {/* Profile Card - Snap 1*/}
      <div
        className="flex relative flex-shrink-0 xl:w-[480px] h-screen snap-start"
        style={boxShadowRight}
      >
        {/* Profile Info */}
        <div className="flex justify-center w-full m-10">
          {}
          <div
            /** Image Container */
            className="w-full md:w-[380px] lg:mt-20"
          >
            <div className="bg-blue-500 h-[300px] rounded-4xl relative overflow-hidden">
              <Image
                src={ProfileImage}
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center mt-10 flex flex-col gap-2">
              <h1 className="text-4xl">Joshua C. Ramos</h1>
              <div className="subText">rjosh4457@gmail.com</div>
              <div className="subText ">Bonifacio Global City, Taguig</div>
              <motion.div
                style={{
                  margin: "0 auto",
                  marginTop: 20,
                  display: "flex",
                  gap: 10,
                }}
              >
                <AppCircularButton icon={<MailIcon />} />
                <AppCircularButton icon={<TelephoneIcon />} />
                <AppCircularButton icon={<WebIcon />} />
                <AppCircularButton icon={<GithubIcon />} />
              </motion.div>

              <div className="mx-auto">
                <AppDivider
                  height={150}
                  color="var(--borderColor)"
                  thickness={1}
                />
              </div>
              <motion.div style={{ margin: "0 auto", width: 200 }}>
                <AppButton
                  onClick={() => {
                    document.getElementById("main-section")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Contact
                </AppButton>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div
        /* Main section - Snap 2 */
        id="main-section"
        className="w-full h-screen snap-start xl:overflow-y-scroll"
      >
        <div className="bg-red-500 max-w-[1500px] mx-auto h-[1400px] text-white">
          Main Content Area (Scrolls vertically)
        </div>
      </div>
    </div>
  );
}
