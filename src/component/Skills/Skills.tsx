import React from "react";
import './Skills.css';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from '../../types/store.ts';

const Skills: React.FC = () => {
    const sectionObj = [
        {
            skillName: "Programming Languages",
            bulletsProj: [
                {
                    one: "Java (8 / 11 / 17 / 21 / 25 – Core, Streams, Concurrency, Reactive), JavaScript (ES6+)"
                }
            ]
        },
        {
            skillName: "Backend Frameworks & Platforms",
            bulletsProj: [
                {
                    one: "Spring Boot, Spring WebFlux, Spring MVC, J2EE"
                }
            ]
        },
        {
            skillName: "API & Web Technologies",
            bulletsProj: [
                {
                    one: "RESTful Web Services, Microservices Architecture"
                }
            ]
        },
        {
            skillName: "Frontend Exposure",
            bulletsProj: [
                {
                    one: "React, Thymeleaf, JSP"
                }
            ]
        },
        {
            skillName: "Databases & Persistence",
            bulletsProj: [
                {
                    one: "Oracle SQL, PostgreSQL, MongoDB, Hibernate, JPA, JDBC"
                }
            ]
        },
        {
            skillName: "Messaging & Distributed Systems",
            bulletsProj: [
                {
                    one: "Apache Kafka, Event-Driven Architecture"
                }
            ]
        },
        {
            skillName: "Testing & Quality Assurance",
            bulletsProj: [
                {
                    one: "JUnit 5, Postman"
                }
            ]
        },
        {
            skillName: "Build & Dependency Management",
            bulletsProj: [
                {
                    one: "Maven, Apache Ant"
                }
            ]
        },
        {
            skillName: "Version Control",
            bulletsProj: [
                {
                    one: "Git, TortoiseGit"
                }
            ]
        }
    ]


    const [isOpen, setIsOpen] = useState(false);
    const dark = useSelector((state: RootState) => state.theme.dark);

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
                }}
                style={{background: dark ? "linear-gradient(135deg, #0f4c4c, #993366)" : "linear-gradient(135deg, #7fffd4, #ff93c9)"}}>
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
               <h2 style={{color: dark ? "white" : "#004646"}}>Skills</h2>
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
                            style={{background: dark ? "black" : "linear-gradient(135deg, #7fffd4, #ff93c9)"}}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="main-skill-nav"
                            style={{background: dark ? "black" : "linear-gradient(135deg, #7fffd4, #ff93c9)"}}>
                                <h1>✔️ Skills</h1>
                                <motion.div
                                animate={{ rotate: 180 }}
                                transition={{ duration: 1.5 }}
                                >
                                    <button onClick={() => setIsOpen(false)}>❌</button>
                                </motion.div>
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