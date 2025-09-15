import React from "react";
import './Home.css';
import Navbar from "../../component/Navbar/Navbar.tsx";
import Upperbound from "../../component/upperbound/Upperbound.tsx";

const Home: React.FC = () => {

    return(
        <>
            <div className="main-home-flex">
                <Navbar/>
                <Upperbound/>
            </div>
        </>
    );
}

export default Home;