import React from 'react';
import AnimationLogo from "./AnimationLogo";
import Navbar from "./Navbar";
import TotalBNB from "./TotalBNB";
import AnytimeBNB from "./AnytimeBNB";
import LockedBNB from "./LockedBNB";
import TotalRoi from "./TotalRoi";
import Footer from "./Footer";

const MainPage = () => {
    return (
        <div className="main_page_div">
        <AnimationLogo />
        <Navbar />
        <TotalBNB />
        <AnytimeBNB />
        <LockedBNB />
        <TotalRoi />
        <Footer />
        </div>
    );
};

export default MainPage;