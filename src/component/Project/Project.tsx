import React from "react";
import './Project.css';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Project: React.FC = () => {
    const sectionObj = [
        {
            projectName: "Auth Service",
            techStack: "Spring Boot, PostgreSql, Webclient",
            bulletsProj: [
                {
                    one: `Developed a comprehensive authentication microservice with custom JWT-based security implementation, 
                            handling user registration, authentication, and session management for secure access control. `
                },
                {
                    two: `Engineered custom Spring Security architecture by implementing JWT filters and overriding authentication 
                            provider classes to create a tailored security framework aligned with business requirements. `
                },
                {
                    three: `Built scalable user management service enabling profile updates and personal information management with 
                            role-based access control and data validation. `
                },
                {
                    four: `Implemented secure inter-service communication using Spring WebClient for REST API integration, 
                            ensuring encrypted data transmission and proper error handling. `
                }

            ]
        },
        {
            projectName: "Insurance Web Application",
            techStack: " J2EE, JSP, Oracle SQL",
            bulletsProj: [
                {
                    one: `Designed and implemented user-friendly UI components using JSP, significantly improving user experience and 
                            application accessibility.  `
                },
                {
                    two: `Built modular and reusable utility functions in Java, aiding in efficient development and simplifying future 
                            maintenance.  `
                },
                {
                    three: `Created and optimized batch processes, stored procedures, and SQL functions to handle complex data 
                            processing tasks effectively.  `
                },
                {
                    four: `Leveraged JDBC and JPA to facilitate efficient and reliable communication between the application and the 
                            database.  `
                },
                {
                    five: `Boosted database performance by applying advanced indexing strategies and optimized joins, leading to quicker 
                            query execution and enhanced application speed. `
                }

            ]
        },
        {
            projectName: "Education Management System",
            techStack: "Reactive Java, Thymeleaf, Webclient, H2, Websocket, Apache Kafka",
            bulletsProj: [
                {
                    one: `Designed and implemented an event-driven education management platform using Reactive Java & Kafka, 
                            enabling real-time scheduling, notifications, and class progress tracking. `
                },
                {
                    two: `Built a scheduling engine that ensured conflict-free allocation of classes across students and faculties, enforcing 
                            slot validation and preventing double bookings. `
                },
                {
                    three: `Implemented reactive email notifications with JavaMailSender, sending automated updates for class scheduling, 
                                progress reports, and course completion.`
                },
                {
                    four: `Engineered advanced search capabilities (by date, time, or both) with efficient query handling using Reactive DB 
                                Client & H2 file-based persistence.`
                }

            ]
        }
    ]


    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.div className="main-project-flex" onClick={() => setIsOpen(true)}
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
                    <h1>🚀</h1>
                </motion.div>  
                <h2 style={{color: "#004646"}}>Projects</h2>
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="main-project-flex-increase"
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
                            className="main-project-flex-increase-expanded"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="main-project-nav">
                                <h1>✔️ Projects</h1>
                                <motion.div
                                animate={{ rotate: 180 }}
                                transition={{ duration: 1.5 }}
                                >
                                    <button onClick={() => setIsOpen(false)}>❌</button>
                                </motion.div>
                            </div>
                            {sectionObj.map((project, index) => (
                                <div className="main-project-section" key={index}>
                                    <h3 style={{ textDecoration: "Underline" }}>{project.projectName}</h3>
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

export default Project;