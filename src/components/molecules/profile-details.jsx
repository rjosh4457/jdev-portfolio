import AppDivider from "@/components/app-divider";
import { motion } from "motion/react";
import AppButton from "@/components/app-button";
import AppCircularButton from "@/components/app-circular-button";
import GithubIcon from "@/components/icons/github-icon";
import WebIcon from "@/components/icons/web-icon";
import { MailIcon } from "lucide-react";
import TelephoneIcon from "@/components/icons/telephone-icon";
import useAnimation from "@/hooks/use-animation";
import { FadeIn, FadeInLeft } from "@/utils/animation-configs";

const ProfileDetails = () => {
  const details = useAnimation();
  return (
    <div className="text-center mt-10 flex flex-col gap-2">
      <motion.h1
        ref={details.ref}
        initial={FadeInLeft.initial}
        animate={details.isInView ? FadeInLeft.animate : {}}
        transition={FadeInLeft.transition}
        className="text-4xl"
      >
        Joshua C. Ramos
      </motion.h1>
      <motion.p
        ref={details.ref}
        initial={FadeInLeft.initial}
        animate={details.isInView ? FadeInLeft.animate : {}}
        transition={{ delay: 0.1, ...FadeInLeft.transition }}
        className="sub-text"
      >
        rjosh4457@gmail.com
      </motion.p>
      <motion.p
        ref={details.ref}
        initial={FadeInLeft.initial}
        animate={details.isInView ? FadeInLeft.animate : {}}
        transition={{ delay: 0.2, ...FadeInLeft.transition }}
        className="sub-text "
      >
        Bonifacio Global City, Taguig
      </motion.p>
      <motion.div
        className="flex gap-4"
        style={{
          margin: "0 auto",
          marginTop: 20,
        }}
      >
        <motion.div
          ref={details.ref}
          initial={FadeIn.initial}
          animate={details.isInView ? FadeIn.animate : {}}
          transition={{ delay: 0.3, ...FadeIn.transition }}
        >
          <AppCircularButton>
            <MailIcon />
          </AppCircularButton>
        </motion.div>
        <motion.div
          ref={details.ref}
          initial={FadeIn.initial}
          animate={details.isInView ? FadeIn.animate : {}}
          transition={{ delay: 0.4, ...FadeIn.transition }}
        >
          <AppCircularButton>
            <TelephoneIcon />
          </AppCircularButton>
        </motion.div>
        <motion.div
          ref={details.ref}
          initial={FadeIn.initial}
          animate={details.isInView ? FadeIn.animate : {}}
          transition={{ delay: 0.4, ...FadeIn.transition }}
        >
          <AppCircularButton>
            <WebIcon />
          </AppCircularButton>
        </motion.div>
        <motion.div
          ref={details.ref}
          initial={FadeIn.initial}
          animate={details.isInView ? FadeIn.animate : {}}
          transition={{ delay: 0.3, ...FadeIn.transition }}
        >
          <AppCircularButton>
            <GithubIcon />
          </AppCircularButton>
        </motion.div>
      </motion.div>

      <motion.div className="mx-auto">
        <AppDivider
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "250px" }}
          transition={{ delay: 0.5, duration: 0.6 }}
          color="var(--Hazy)"
          thickness={1}
        />
      </motion.div>
      <motion.div
        className="mx-auto"
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: 200 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <AppButton
          onClick={() => {
            document.getElementById("main-section")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            Contact
          </motion.span>
        </AppButton>
      </motion.div>
    </div>
  );
};

export default ProfileDetails;
