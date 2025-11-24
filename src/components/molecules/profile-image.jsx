import { motion } from "motion/react";
import Image from "next/image";
import profileImg from "@/assets/profile-image.jpg";
import { ScaleUp } from "@/utils/animation-configs";

const ProfileImage = () => {
  return (
    <motion.div
      initial={ScaleUp.initial}
      animate={ScaleUp.animate}
      transition={{ duration: 0.8 }}
      className="mx-auto my-10"
    >
      <Image
        src={profileImg}
        loading="eager"
        alt="Profile"
        className="w-60 h-60 object-contain rounded-full"
      />
    </motion.div>
  );
};
export default ProfileImage;
