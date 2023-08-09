import React from "react";
import { SocialIcon } from 'react-social-icons';
import { FaArtstation } from 'react-icons/fa';
import { motion } from "framer-motion";



type Props = {};

function Header({ }: Props) {
    return <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20
    xl:items-center">
        <motion.div
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5,
            }}

            className="flex flex-row items-center" >
            {/* Social Icons */}
            <div className="linkBtn">
            <SocialIcon url="https://twitter.com/lunganart"
                fgColor="gray"
                bgColor="transparent"
            />
            </div>
            <div className="linkBtn">
            <SocialIcon url="https://www.instagram.com/_lungan_/"
                fgColor="gray"
                bgColor="transparent"
            />
            </div>

            {/* icon link */}
            <div className="linkBtn">
            <a href="https://www.artstation.com/lungan" target="_blank" rel="noopener noreferrer">
                <div style={{
                    display: 'inline-block',
                    width: '50px',
                    height: '50px',
                    position: 'relative',
                    overflow: 'hidden',
                    verticalAlign: 'middle',
                }}
                >
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%'
                    }}>
                        <div style={{

                            borderRadius: '50%',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            fillRule: 'evenodd',
                            color: 'gray',
                            backgroundColor: 'transparent',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',

                        }}>
                            <FaArtstation

                                style={{
                                    position: 'absolute',
                                    height: '50%',
                                    width: '50%',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    // verticalAlign: 'middle',
                                    // textAlign: 'center'

                                }}
                            />
                        </div>
                    </div>
                </div>
            </a>
            </div>
        </motion.div >
        <motion.div
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5,
            }}
            className="flex flex-row items-center text-gray-300 cursor-pointer" >
                <div className="linkBtn">
            <SocialIcon
                className="cursor-pointer"
                network="email"
                fgColor="gray"
                bgColor="transparent"
            />
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get In Touch</p>
            </div>
        </motion.div>
    </header>;
}

export default Header;
/* " inline-block
w - 50 h - 50 relative
overflow - hidden
verticalAlign - middle" */