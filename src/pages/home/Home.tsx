import React, { useEffect } from "react";
import './Home.css';
import Navbar from "../../component/Navbar/Navbar.tsx";
import Upperbound from "../../component/upperbound/Upperbound.tsx";
import ThemeWrapper from "../../component/Themewrapper/Themewrapper.tsx";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from '../../types/store.ts';
import { setDarkTheme, setLightTheme } from '../../types/themeSlice.ts';

const Home: React.FC = () => {

    const dispatch = useDispatch();
    const dark = useSelector((state: RootState) => state.theme.dark);

    useEffect(() => {
        const checkTheme = () => {
        const now = new Date();
        const hour = now.getHours();

        if (hour >= 18 || hour < 6) {
            if (!dark) {
                dispatch(setDarkTheme())
            }
        } else {
            if (dark) {
                dispatch(setLightTheme());
            }
        }
        };

        checkTheme(); 
        const interval = setInterval(checkTheme, 60 * 1000);

        return () => clearInterval(interval);
    }, []);

    return(
        <>
            <ThemeWrapper>
                <div className="main-home-flex">
                    <Navbar/>
                    <Upperbound/>
                </div>
            </ThemeWrapper>
        </>
    );
}

export default Home;