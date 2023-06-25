import React from "react";
import { motion } from "framer-motion";

type Props = {};

const BackgroundCircles = (props: Props) => {
    return <div className="relative flex justify-center items-center">
        <div className="rounded-full border border-[#333333]  h-[200px] w-[200px] mt-52 animate-ping absolute" />
        <div className="rounded-full border border-[#333333]  h-[300px] w-[300px] mt-52 absolute" />
        <div className="rounded-full border border-[#333333]  h-[500px] w-[500px] mt-52 absolute" />
        <div className="rounded-full border border-[#f7AB0A] opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse" />
        <div className="border border-[#333333] rounded-full h-[800px] w-[800px] mt-52 absolute" />
    </div>;
};

export default BackgroundCircles;
