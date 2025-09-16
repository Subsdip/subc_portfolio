import React from "react";
import './Navbar.css';
import Circle from "../Circle/Circle.tsx";
import Profilepic from '../../assets/profile pic.jpg';
import {FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from '../../types/store.ts';
import { toggleTheme } from '../../types/themeSlice.ts';

const Navbar: React.FC = () => {
    const dispatch = useDispatch();
    const dark = useSelector((state: RootState) => state.theme.dark);

    return(
        <>
            <div className="main-flex-navbar">
                <Circle src={Profilepic}/>
                <div className="main-flex-intro">
                    <h1 style={{fontSize: "clamp(1.9rem, 4vw, 2.5rem)"}}>Subhadip Mukherjee</h1>
                    <h2 style={{fontSize: "clamp(1.4rem, 1vw, 2rem)"}}>🚀Java Full Stack Engineer ☕💻🌐</h2>
                    <h5 style={{fontSize: "clamp(1rem, .5vw, 2rem)"}}>"I build reliable digital experiences that just work."</h5>
                </div>
                <div className="main-flex-icons">
                        <a
                        href="https://www.linkedin.com/in/subc"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            <FaLinkedin size={32} color={dark ? "#ffffff" : "#006666"}/>
                        </a>
                        <a
                        href="https://github.com/Subsdip"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            <FaGithub size={32} color={dark ? "#ffffff" : "#006666"}/>
                        </a>
                        <a
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            <button onClick={() => dispatch(toggleTheme())}>
                                {dark ? <FaMoon size={32} color="white"/> : <FaSun size={32}/>}
                            </button>
                        </a>
                </div>
            </div>
        </>
    );
}

export default Navbar;