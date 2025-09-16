import React from "react";
import './Home.css';
import Navbar from "../../component/Navbar/Navbar.tsx";
import Upperbound from "../../component/upperbound/Upperbound.tsx";
import ThemeWrapper from "../../component/Themewrapper/Themewrapper.tsx";

const Home: React.FC = () => {

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