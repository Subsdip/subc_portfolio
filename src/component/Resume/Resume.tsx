import React from "react";
import './Resume.css';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Resume: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.div className="main-resume-flex" onClick={() => setIsOpen(true)}
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
                   <h1>📄</h1> 
                </motion.div>   
                <h2 style={{color: "#004646"}}>Resume</h2>
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="main-resume-flex-increase"
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
                            className="main-resume-flex-increase-expanded"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="main-resume-nav">
                                <h1>✔️ Resume</h1>
                                <button onClick={() => setIsOpen(false)}>❌</button>
                            </div>
                            <iframe 
                                src="/SUBHADIP_MUKHERJEE_CV.pdf" 
                                width="100%" 
                                height="600px" 
                                style={{ border: "none", marginTop: "20px"}}
                                title="Resume"
                            ></iframe>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Resume;