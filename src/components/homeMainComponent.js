import React from "react";
import HomeHeader from "./homeMain";
import Services from "./homePageServices";
import About from "./homeAboutUs";
import News from "./homeNews";
import HomeDetail from "./detailComponent";
const homeMainComponent = () => {
    return (
        <div>
            <HomeHeader/>

            <div className="services-first-section">
                <HomeDetail img={"/images/relaspe.png"} swap={true} content={"<h1>Relapse prevention in the palm of your hand</h1><p>Developed by a team of data scientists and treatment experts based on techniques showing a 50% improvement in abstinence vs. traditional treatment methods, WEconnect helps you stay connected and accountable on your recovery journey.</p>"}/>
            </div>
            <Services/>
            <About/>
            <News/>
        </div>

    )
}
export default homeMainComponent