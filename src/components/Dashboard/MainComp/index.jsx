import React from "react";
import "./style.css";
import Button from "../../common/Button/button";
import iphone from "../../../assets/iphone.png"
import gradient from "../../../assets/gradient.png"
import { motion } from "framer-motion";
import { delay } from "framer-motion/dom";

function MainComp() {
    return (
      <div className="max-sm:text-2xl flex-1">
        <div className="left-comp saira-italic flex-1 font-extrabold text-7xl px-12 py-15 max-sm:text-4xl">
          <motion.h
            className="track-head"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
          >
            <span className="track flex-1 text-white stroke-blue-800 ">
              Track Crypto
            </span>
            <div className="real py-6 ">Real Time </div>
          </motion.h>
        </div>
        <motion.h
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="text-3xl px-12 text-gray-500 -mt-14 max-sm:text-xl">
            Track Crypto Price in Real Time !!!
          </div>
          <div className=" px-11 py-5 flex gap-x-4 max-sm:text-xl justify-start items-center mt-1.5">
            <Button text={"Dashboard"} />
            <Button text={"Share"} className="self" />
          </div>
        </motion.h>
        <div className="flex-1 flex justify-center items-center phone-cont max-sm:mt-8">
          <motion.h
            initial={{ y: -50 }}
            animate={{ y: 30 }}
            transition={{
              type: "smooth",
              repeatType: "mirror",
              duration: 2,
              repeat: Infinity,
            }}
          >
            <img src={iphone} className="iphone" alt="iPhone mockup" />
          </motion.h>
          
          {/* <img src={gradient} className="gradient" alt="Gradient background" /> */}
        </div>
        <div className=""></div>
      </div>
    );
}


export default MainComp;