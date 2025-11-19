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
      className="bg-blue-500 h-[300px] rounded-4xl relative overflow-hidden"
    >
      <Image
        src={profileImg}
        loading="eager"
        alt="Profile"
        fill
        className="object-cover"
      />
    </motion.div>
  );
};
export default ProfileImage;
