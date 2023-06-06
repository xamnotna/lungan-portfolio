/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

const Hero = (props: Props) => {
    const [text, count] = useTypewriter({
        words: [
            "a concept artist.",
            "a concept artist who loves to draw monsters.",
            "a big fan of the horror genre.",
            "also a game developer",
        ],
        loop: true,
        delaySpeed: 1500,
        deleteSpeed: 40,
    });

    return <div>
        <h1 className="text-4xl font-bold text-center">
            <p>Hi, My name Viktor</p>
            <p>I'm {''}
                <span className="text-blue-500">{text}</span>
            </p>
            <Cursor cursorColor="#139BD5" />
        </h1>
    </div>;
};

export default Hero;

