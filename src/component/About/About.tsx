import React from "react";
import './About.css';
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from '../../types/store.ts';


const About: React.FC = () => {
    const aboutMe = `I am a Software Engineer with hands-on experience in building high-performance, scalable, and event-driven applications using Spring Boot, Reactive Java, and Apache Kafka. Currently at Infosys, I architect and deliver microservices capable of handling 10K+ concurrent users with 99.9% uptime, focusing on real-time data processing, fault-tolerant messaging pipelines, and modular API design.

                    My work spans the full software lifecycle: from designing efficient database schemas and optimizing complex queries to implementing secure, JWT-based authentication services and responsive UI components with JSP and Thymeleaf. I take pride in enhancing system performance, reducing latency, and ensuring maintainable, reusable solutions across teams.

                    I am proficient in Java (Core & Reactive), JavaScript, Spring Boot, J2EE, PostgreSQL, Oracle SQL, MongoDB, Apache Kafka, Docker, and modern web technologies. I am passionate about leveraging reactive programming, event-driven architectures, and microservices to deliver business-critical solutions with reliability and speed.

                    Beyond development, I actively contribute to improving observability, backpressure handling, and performance tuning, ensuring robust systems under load. My dedication has been recognized with Beyond Performance and Delivery Excellence Awards for client-side impact and on-time, high-quality delivery.

                    I am a Software Engineer with hands-on experience in building high-performance, scalable, and event-driven applications using Spring Boot, Reactive Java, and Apache Kafka. Currently at Infosys, I architect and deliver microservices capable of handling 10K+ concurrent users with 99.9% uptime, focusing on real-time data processing, fault-tolerant messaging pipelines, and modular API design.

                    My work spans the full software lifecycle: from designing efficient database schemas and optimizing complex queries to implementing secure, JWT-based authentication services and responsive UI components with JSP and Thymeleaf. I take pride in enhancing system performance, reducing latency, and ensuring maintainable, reusable solutions across teams.

                    I am proficient in Java (Core & Reactive), JavaScript, Spring Boot, J2EE, PostgreSQL, Oracle SQL, MongoDB, Apache Kafka, Docker, and modern web technologies. I am passionate about leveraging reactive programming, event-driven architectures, and microservices to deliver business-critical solutions with reliability and speed.

                    Beyond development, I actively contribute to improving observability, backpressure handling, and performance tuning, ensuring robust systems under load. My dedication has been recognized with Beyond Performance and Delivery Excellence Awards for client-side impact and on-time, high-quality delivery.`;


    const [isOpen, setIsOpen] = useState(false);
    const dark = useSelector((state: RootState) => state.theme.dark);

    const openContainer = () => {
        setIsOpen(true);
        history.pushState({ containerOpen: true }, "");
    };

    const closeContainer = () => {
        setIsOpen(false);
        history.back(); 
    };

    useEffect(() => {
        const handlePopState = () => {
        if (isOpen) {
            setIsOpen(false); 
        }
    };

        window.addEventListener("popstate", handlePopState);
        return () => {
        window.removeEventListener("popstate", handlePopState);
        };
    }, [isOpen]);

    return (
        <>
            <motion.div className="main-about-flex" onClick={() => (setIsOpen(true),openContainer)}
                whileHover={{
                    scale: [null, 1.1, 1.1],
                    transition: {
                        duration: 0.1,
                        times: [0, 0.2, 1],
                        ease: ["easeInOut", "easeOut"],
                    },
                }}
                style={{background: dark ? "linear-gradient(135deg, #1f7f6b, #5e2a5e)" : "linear-gradient(135deg, #7fffd4, #dda0dd)"}}>
                <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -3, 0] }} 
                transition={{
                duration: 0.6,   
                repeat: Infinity,   
                repeatType: "loop", 
                ease: "easeInOut",  
                }}>
                    <h1>🧑</h1>
                </motion.div>
                <h2 style={{color: dark ? "white" : "#004646"}}>About</h2>
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                <motion.div
                    className="main-about-flex-increase"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => (setIsOpen(false), closeContainer())}    
                >
                    <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{width: "85dvw", height: "80dvh", scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8 }}
                    transition={{ type: "spring", duration: 0.5, visualDuration: 0.2, bounce: 0.4 }}
                    className="main-about-flex-increase-expanded"
                    style={{background: dark ? "black" : "linear-gradient(135deg, #7fffd4, #dda0dd)"}}
                    onClick={(e) => e.stopPropagation()}
                    >
                    <div 
                    className="main-about-nav"
                    style={{background: dark ? "black" : "linear-gradient(135deg, #7fffd4, #dda0dd)"}}>
                        <h1>✔️ About</h1>
                        <motion.div
                        animate={{ rotate: 180 }}
                        transition={{ duration: 1.5 }}
                        >
                            <button onClick={() => setIsOpen(false)}>❌</button>
                        </motion.div>
                    </div>
                    <div className="main-about-nav-section">
                        <p>
                            {aboutMe}
                        </p>
                    </div>
                    </motion.div>
                </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default About;