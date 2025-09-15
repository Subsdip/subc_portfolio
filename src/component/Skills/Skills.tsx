import React from "react";
import './Skills.css';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Skills: React.FC = () => {
    const sectionObj = [
        {
            skillName: "🖥️|Programming Languages",
            bulletsProj: [
                {
                    one:`🟨📜|Javascript, ☕|Java(Core and Reactive)`
                }
            ]
        },
        {
            skillName: "⚙️|Frameworks/Library",
            bulletsProj: [
                {
                    one:`🌱|Springboot, 🏢|J2EE, ⚛️|React`
                }
            ]
        },
        {
            skillName: "🗄️|Databases",
            bulletsProj: [
                {
                    one:`🟥🏺|Oracle, 🍃|MongoDB`
                }
            ]
        },
        {
            skillName: "🗄️|Build Tools",
            bulletsProj: [
                {
                    one:`🐜|Apache Ant, 🔨📦|Maven`
                }
            ]
        },
        {
            skillName: "🔄|Version Control",
            bulletsProj: [
                {
                    one:`🐢🔧|Tortoise Git, 🟧🔗|Git`
                }
            ]
        },
        {
            skillName: "Others",
            bulletsProj: [
                {
                    one:"🐳|Docker",
                },
                {
                    two:"✅🧪|JUnit",
                },
                {
                    three:"🌀|Apache Kafka",
                },
                {
                    four:"🔄📡|Websocket",
                },
                {
                    five:"📄☕|JSP",
                },
                {
                    six:"🌿📘|ThymeLeaf",
                }
            ]
        },
    ]


    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.div className="main-skill-flex" onClick={() => setIsOpen(true)}
                whileHover={{
                    scale: [null, 1.1, 1.1],
                    transition: {
                        duration: 0.1,
                        times: [0, 0.2, 1],
                        ease: ["easeInOut", "easeOut"],
                    },
                }}>
                <motion.div
                    animate={{ y: [0, -3, 0] }} 
                    transition={{
                    duration: 0.6,   
                    repeat: Infinity,   
                    repeatType: "loop", 
                    ease: "easeInOut",  
                }}>
                    <h1>⚙️</h1>
                </motion.div>
               <h2 style={{color: "#004646"}}>Skills</h2>
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="main-skill-flex-increase"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ width: "85dvw", height: "80dvh", scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8 }}
                            transition={{ type: "spring", duration: 0.5, visualDuration: 0.2, bounce: 0.4 }}
                            className="main-skill-flex-increase-expanded"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="main-skill-nav">
                                <h1>✔️ Skills</h1>
                                <button onClick={() => setIsOpen(false)}>❌</button>
                            </div>
                            {sectionObj.map((project, index) => (
                                <div className="main-skill-section" key={index}>
                                    <h3>{project.skillName} :-</h3>
                                    {project.bulletsProj.map((listProject, index) => (
                                        <ul key={index}>
                                            <li>{Object.values(listProject)}</li>
                                        </ul>
                                    ))}
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Skills;