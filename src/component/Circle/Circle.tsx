import React from "react";
import './Circle.css';
import { motion } from "framer-motion";

interface CircleProps {
  src: string;
}

const Circle: React.FC<CircleProps> = ({src}) => {
    return(
        <>
            <motion.div className="main-flex-circle">
                <img src={src} alt="profile" className="circle-img" />
            </motion.div>
        </>
    );
}

export default Circle;