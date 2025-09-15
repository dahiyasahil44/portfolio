import React from "react"
import person from "../assets/sahil.jpg";
import InformationSummary from "./InformationSummary";
import { motion } from "framer-motion";

// Information summary data
const informationSummaryData = [
    {
        id: 1,
        title: "Experience",
        description: "15 Y.",
    },
    {
        id: 2,
        title: "Projects Completed",
        description: "250+",
    },
    {
        id: 3,
        title: "Happy Clients",
        description: "58",
    },
];

export default function Hero() {
    return (
        <>
            <div
                className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
                id="introduction"
            >
                <div className="w-full flex flex-col justify-between max-lg:text-center">
                    <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
                        <motion.p initial={{ opacity: 0.5, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }} className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
                            Hello, I’m
                            <span className="text-nowrap shrink-0 inline-block w-full">
                                Sahil
                            </span>
                        </motion.p>
                        <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
                            I'm a <span className="bg-highlight">Full-Stack Developer</span>
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
                    <div className="mx-auto lg:mx-0 relative" style={{ display: 'none' }}>
                        <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
                            {informationSummaryData.map((item) => (
                                <InformationSummary key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
                <motion.div initial={{ opacity: 0.5, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
                >
                    <img
                        className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-tl-[48px] rounded-br-[48px] opacity-70`}
                        src={person}
                        alt="sahil"
                    />
                </motion.div>
            </div>
        </>
    )
}