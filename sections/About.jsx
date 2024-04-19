"use client";

import { motion } from "framer-motion";
import { InsightCard, TitleText, TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

function About() {
  return (
    <section className={`${styles.paddings} relative z-10`} id="about">
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TitleText
          title="What we do?"
          textStyles="text-center"
          className="my-5"
        />

        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
        >
          Whether you're a patient looking to access your medical records, a
          healthcare provider seeking to collaborate with patients, or a
          caregiver managing the health of a loved one, our website is here to
          help. We're committed to providing you with the highest level of
          service and support.
          
        </motion.p>

        {/* <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[28px]"
        /> */}
      </motion.div>
    </section>
  );
}

export default About;
