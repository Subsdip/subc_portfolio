import React from "react";
import './Navbar.css';
import Circle from "../Circle/Circle.tsx";
import Profilepic from '../../assets/profile pic.jpg';
import {FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar: React.FC = () => {

    // const text = ``
    // const letter = text.split("");

    // const container = {
    //     hidden: { opacity: 0 },
    //     visible: {
    //     opacity: 1,
    //     transition: {
    //         staggerChildren: 0.05,
    //     },
    //     },
    // };

    //  const child = {
    //     hidden: { opacity: 0, y: "0.25em" },
    //     visible: {
    //     opacity: 1,
    //     y: "0em",
    //     transition: { duration: 0.3},
    //     },
    // };

    return(
        <>
            <div className="main-flex-navbar">
                <Circle src={Profilepic}/>
                <div className="main-flex-intro">
                    <h1 style={{fontSize: "clamp(1.5rem, 4vw, 2.5rem)"}}>Subhadip Mukherjee</h1>
                    <h2 style={{fontSize: "1.5rem"}}>🚀Java Full Stack Engineer ☕💻🌐</h2>
                    <h5 style={{fontSize: "1.1rem"}}>"I build reliable digital experiences that just work."</h5>
                </div>
                <div className="main-flex-icons">
                        <a
                        href="https://www.linkedin.com/in/subc"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            <FaLinkedin size={32} color="#006666"/>
                        </a>
                        <a
                        href="https://github.com/Subsdip"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            <FaGithub size={32} color="#006666"/>
                        </a>
                </div>
                {/* <motion.div 
                className="main-flex-para"
                variants={container}
                initial="hidden"
                animate="visible">
                    {letter.map((char, index) => (
                        <motion.span key={index} variants={child} style={{ display: "inline-block"}}>
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.div> */}
            </div>
        </>
    );
}

export default Navbar;