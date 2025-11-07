import React from "react";
import person from "../assets/sahil.jpg";
import InformationSummary from "./InformationSummary";
import { motion } from "framer-motion";



export default function Hero() {
    return (
        <>
            <div
                className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-32 lg:mb-28 max-xl:gap-4 p-2 max-xxl:px-4"
                id="introduction"
            >
                {/* LEFT SIDE */}
                <div className="w-full flex flex-col justify-between max-lg:text-center">
                    <div className="pt-8 lg:pt-12 transition-all duration-500">
                        <motion.p
                            initial={{ opacity: 0.5, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full"
                        >
                            Hello, I’m
                            <span className="text-nowrap shrink-0 inline-block w-full">
                                Sahil
                            </span>
                        </motion.p>

                        <p className="text-xs xxs:text-lg lg:text-[18px] my-6 leading-relaxed">
                            I'm a <span className="bg-highlight">Full-Stack Developer</span>{" "}
                            specializing in <span className="bg-highlight">MERN</span> and{" "}
                            <span className="bg-highlight">PHP</span>. Based in Haryana, India,
                            I craft efficient, scalable, and user-focused web solutions that
                            blend performance with great design.
                        </p>

                        <p className="text-center lg:text-start">
                            <a
                                className="btn-primary btn btn-xs xxs:btn-lg text-white"
                                href="mailto:imsahil440407@gmail.com"
                            >
                                Say Hello!
                            </a>
                        </p>
                    </div>


                </div>

                {/* RIGHT SIDE - IMAGE */}
                <motion.div
                    initial={{ opacity: 0.5, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="relative flex justify-center items-center w-full mx-auto mt-8 lg:mt-0"
                >
                    <img
                        src={person}
                        alt="Sahil"
                        className="
      shadow-2xl shadow-gray-200 
      w-[70%] sm:w-[65%] md:w-[60%] lg:w-[100%] 
      max-w-[540px] 
      h-auto 
      rounded-tl-[36px] rounded-br-[36px] 
      object-cover bg-white
      transition-all duration-500
    "
                    />
                </motion.div>

            </div>
        </>
    );
}
