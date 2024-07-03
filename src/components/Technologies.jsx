import { motion } from "framer-motion";
import { DiJavascript } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";

const iconAnimation=()=>{
  let randomNo=(Math.random()%2)+1;
  randomNo+=Math.random()/10;
  const duration=(randomNo>=1)?randomNo:randomNo+1;
  return {
  initial:{y:-10+randomNo},
  animate:{
    y:[10,-10],
    transition:{
      duration:(duration),
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse"
    }
  }
}}

function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24 ">
      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -30, opacity: 0.2 }}
        transition={{ duration: 0.5,delay:0.2}}
        className="my-20 text-center text-4xl ">Technologies</motion.h1>
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0.3 }}
        transition={{ duration: 1,delay:0.2}}
        className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconAnimation()}
          animate="animate"
          initial="initial"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconAnimation()}
          animate="animate"
          initial="initial"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandCpp className="text-7xl text-sky-700" />
        </motion.div>
        <motion.div
          variants={iconAnimation()}
          animate="animate"
          initial="initial"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconAnimation()}
          animate="animate"
          initial="initial"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiJavascript className="text-7xl text-yellow-400" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies;
