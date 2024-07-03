import { motion } from "framer-motion";
import profilePic from "../assets/kevinRushProfile.jpg";
import { HERO_CONTENT } from "../constants/static_data.js";

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 ">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Sai Nikhilesh
            </motion.h1>
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent "
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="my-2 max-w-xl py-6 font-light tracking-tight "
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="w-full lg:w-1/2 lg:p-8 "
        >
          <div className="flex justify-center">
            <img src={profilePic} alt="profile picture" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
