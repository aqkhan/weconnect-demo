import React from "react";
import HomeHeader from "./homeMain";
import Services from "./homePageServices";
import About from "./homeAboutUs";
import News from "./homeNews"
const homeMainComponent = () => {
    return (
        <div>
            <HomeHeader/>
            <Services/>
            <About/>
            <News/>
        </div>

    )
}
export default homeMainComponent