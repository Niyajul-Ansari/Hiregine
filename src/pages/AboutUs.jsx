import React from "react";
import About from "../Aboutcomponent/About";
import Header from "../Component/Header";
import AboutSection from "../Aboutcomponent/AboutSection";
import HighlightsSection from "../Aboutcomponent/HighlightsSection";
import MissionVisionSection from "../Aboutcomponent/MissionVisionSection";

const AboutUs = () => {
    // const handleRedirect = () => {
    //     window.location.href = "/software-developer"; // Redirect on click
    // };

    return (
        
        <>
        <Header/>
        <About/>
        <AboutSection/>
        <HighlightsSection/>
        <MissionVisionSection/>
        </>
    );
};

export default AboutUs;
