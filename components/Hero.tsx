/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import profilepic from "../public/profilepic.png";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
    const [text, count] = useTypewriter({
        words: [
            //"a concept artist.",
            "a concept artist who loves to draw monsters.",
            "a big fan of the horror genre.",
            "also a game developer",
        ],
        loop: true,
        delaySpeed: 1500,
        deleteSpeed: 40,
    });

    return <div className="h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden">
        <BackgroundCircles />
        <Image
            className="relative rounded-full h-32 w-32 mx-auto object-cover"
            src={profilepic}
            alt="Picture of the author"

        />

        <div className="z-20">
            <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] ">
                I'm Lungan
            </h2>
            <h1 className="text-2xl lg:text-4xl font-semibold text-center px-10">
                {/* <p>Hi, My name Viktor</p> */}
                <p>I'm {''}
                    <span className="text-blue-500 mr-3">{text}</span>
                    <Cursor cursorColor="#139BD5" />
                </p>
            </h1>
            <div className="pt-5">
                <Link href='#about'>
                <button className="heroButton">About</button>
                </Link>
                <Link href='experience'>
                <button className="heroButton">Experience</button>
                </Link>
                <Link href='skills'>
                <button className="heroButton">Skills</button>
                </Link>
                <Link href='projects'>
                <button className="heroButton">Projects</button>
                </Link>
            </div>
        </div>
    </div>;
};

export default Hero;

