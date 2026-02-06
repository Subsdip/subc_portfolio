"use client"

import "./Upperbound.css";
import About from "../About/About.tsx";
import Project from "../Project/Project.tsx";
import Resume from "../Resume/Resume.tsx";
import Experience from "../Experience/Experience.tsx";
import Skills from "../Skills/Skills.tsx";
import { ArrowRight, ArrowLeft} from "lucide-react";
import { motion, AnimatePresence, usePresenceData, wrap, useMotionValue} from "motion/react";
import { useState, forwardRef, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from '../../types/store.ts';


const Upperbound: React.FC = () => {
    const items = [
        <About key="about" />,
        <Project key="project" />,
        <Resume key="resume" />,
        <Experience key="experience" />,
        <Skills key="skills" />
    ];

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [direction, setDirection] = useState<1 | -1>(1);
    const dark = useSelector((state: RootState) => state.theme.dark);

    function setSlide(newDirection: 1 | -1) {
        const nextIndex = wrap(0, items.length, selectedIndex + newDirection);
        setSelectedIndex(nextIndex);
        setDirection(newDirection);
    }

    const ref = useRef<HTMLDivElement>(null);
    const [{ width, height }, measure] = useElementDimensions(ref);
    const gradientX = useMotionValue(0.5);
    const gradientY = useMotionValue(0.5);

    return (
        <>
            <div
            className={dark ? "main-upperbound-flex-dark" : "main-upperbound-flex"}
            onPointerMove={(e) => {
                gradientX.set(e.clientX / width);
                gradientY.set(e.clientY / height);
            }}
            >
                <motion.div
                    ref={ref}
                    className="main-upperbound-flex-shadow"
                    onPointerEnter={() => measure()}
                >
                    <div className="main-upperbound-flex-inner">
                        <motion.button
                            className="nav-button"
                            onClick={() => setSlide(-1)}
                            whileTap={{ scale: 0.9 }}
                        >
                            <LeftArrow />
                        </motion.button>

                        <AnimatePresence custom={direction} initial={false} mode="popLayout">
                                <Slide key={selectedIndex}>
                                        {items[selectedIndex]}
                                </Slide>
                        </AnimatePresence>

                        <motion.button
                            className="nav-button"
                            onClick={() => setSlide(1)}
                            whileTap={{ scale: 0.9 }}
                        >
                            <RightArrow />
                        </motion.button>
                    </div>
                </motion.div>
            </div>
            <h5 style={{fontSize: "clamp(.7rem, .2vw, 1.5rem)"}}>© {new Date().getFullYear()} Crafted by Subc 😄</h5>
        </>
    );
};

const Slide = forwardRef(function Slide(
    { children }: { children: React.ReactNode },
    ref: React.Ref<HTMLDivElement>
) {
    const direction = usePresenceData();
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{
                opacity: 1,
                x: 0,
                transition: {
                    delay: 0.1,
                    type: "spring",
                    visualDuration: 0.3,
                    bounce: 0.3,
                },
            }}
            exit={{ opacity: 0, x: direction * -50 }}
            style={{ flex: 1, display: "flex", justifyContent: "center" }}
        >
            {children}
        </motion.div>
    );
});

function LeftArrow() {
    const dark = useSelector((state: RootState) => state.theme.dark);

    return (
        <div>
            <ArrowLeft size={32} color={dark ? "white" : "#017f7fff"}/>
        </div>
    );
}

function RightArrow() {
    const dark = useSelector((state: RootState) => state.theme.dark);

    return (
        <div>
            <ArrowRight size={32} color={dark ? "white" : "#017f7fff"}/>
        </div>
    );
}


function useElementDimensions(
    ref: React.RefObject<HTMLDivElement | null>
): [{ width: number; height: number; top: number; left: number }, VoidFunction] {
    const [size, setSize] = useState({ width: 0, height: 0, top: 0, left: 0 });

    function measure() {
        if (!ref.current) return;
        setSize(ref.current.getBoundingClientRect());
    }

    useEffect(() => {
        measure();
    }, []);

    return [size, measure];
}

export default Upperbound;
