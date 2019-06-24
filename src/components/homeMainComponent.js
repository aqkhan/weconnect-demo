import React from "react";
import HomeHeader from "./homeMain";
import Services from "./homePageServices";
import About from "./homeAboutUs";
import News from "./homeNews";
import HomeDetail from "./detailComponent";
const homeMainComponent = ({data}) => {
    console.log('data', data);
    return (
        <div>
            <HomeHeader content={data.content} headerBackground={"https:" + data.headerBackground.file.url} headerBanner={"https:" + data.headerBanner.file.url} />

            <div className="services-first-section">
                <HomeDetail img={"https:" + data.featureImage.file.url} swap={true} content={"<h1>Relapse prevention in the palm of your hand</h1><p>Developed by a team of data scientists and treatment experts based on techniques showing a 50% improvement in abstinence vs. traditional treatment methods, WEconnect helps you stay connected and accountable on your recovery journey.</p>"}/>
            </div>
            <Services/>
            <About/>
            <News/>
        </div>

    )
}
export default homeMainComponent