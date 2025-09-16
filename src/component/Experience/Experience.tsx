import React from "react";
import './Experience.css';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from '../../types/store.ts';

const Experience: React.FC = () => {
    const sectionObj = [
        {
            title: "Digital Systems Engineer",
            companyName: "Tata Consultancy services ltd",
            techStack: "J2EE, JSP, Oracle Sql, JBOSS",
            bulletsProj: [
                {
                    one: `Crafted intuitive UI components using JSP, enhancing user interaction and overall application usability.`
                },
                {
                    two: `Developed reusable utility methods in Java to streamline development and code maintainability.`
                },
                {
                    three: `Developed Batch Jobs, stored procedures and functions in Sql, to enhance data manipulation and processing.`
                },
                {
                    four: `Utilized JDBC and JPA for seamless database interaction within the application.`
                },
                {
                    five: `Revamped existing features and fixed critical bugs, elevating system performance and user satisfaction.`
                },
                {
                    six: `Accelerated query performance by implementing effective indexing and joining techniques, resulting in 
                            faster data retrieval and improved overall application responsiveness. `
                }
            ]
        },
        {
            title: "Associate Consultant",
            companyName: "Infosys ltd",
            techStack: " Spring Boot, Reactive Java, PostgreSQL, Apache Kafka",
            bulletsProj: [
                {
                    one: `Crafted intuitive UI components using JSP, enhancing user interaction and overall application usability.`
                },
                {
                    two: `Developed reusable utility methods in Java to streamline development and code maintainability.`
                },
                {
                    three: `Developed Batch Jobs, stored procedures and functions in Sql, to enhance data manipulation and processing.`
                },
                {
                    four: `Utilized JDBC and JPA for seamless database interaction within the application.`
                },
                {
                    five: `Revamped existing features and fixed critical bugs, elevating system performance and user satisfaction.`
                },
                {
                    six: `Accelerated query performance by implementing effective indexing and joining techniques, resulting in 
                            faster data retrieval and improved overall application responsiveness. `
                }
            ]
        }
    ]


    const [isOpen, setIsOpen] = useState(false);
    const dark = useSelector((state: RootState) => state.theme.dark);

    return (
        <>
            <motion.div className="main-experience-flex" onClick={() => setIsOpen(true)}
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
                    <h1>📈</h1>
                </motion.div>
                <h2 style={{color: "#004646"}}>Experience</h2>
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="main-experience-flex-increase"
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
                            className="main-experience-flex-increase-expanded"
                            style={{background: dark ? "black" : "linear-gradient(135deg, #7fffd4, #fca07e)"}}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="main-experience-nav"
                            style={{background: dark ? "black" : "linear-gradient(135deg, #7fffd4, #fca07e)"}}>
                                <h1>✔️ Experience</h1>
                                <motion.div
                                animate={{ rotate: 180 }}
                                transition={{ duration: 1.5 }}
                                >
                                    <button onClick={() => setIsOpen(false)}>❌</button>
                                </motion.div>
                            </div>
                            {sectionObj.map((project, index) => (
                                <div className="main-experience-section" key={index}>
                                    <h3 style={{ textDecoration: "Underline" }}>{project.title}</h3>
                                    <p><span style={{fontStyle: "italic"}}>Company Name </span>-- {project.companyName}.</p>
                                    <p><span style={{fontStyle: "italic"}}>Tech Stack </span>-- {project.techStack}.</p>
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

export default Experience;