import React from "react";
import HomeHeader from "./homeMain";
import Services from "./homePageServices";
import About from "./homeAboutUs";
import News from "./homeNews";
import HomeDetail from "./detailComponent";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const homeMainComponent = ({data}) => {
    console.log('data', data);
    const featureTextMarkup = documentToHtmlString(JSON.parse(data.featureText.featureText));
    return (
        <div>
            <HomeHeader content={data.content} headerBackground={"https:" + data.headerBackground.file.url} headerBanner={"https:" + data.headerBanner.file.url} />

            <div className="services-first-section">
                <HomeDetail img={"https:" + data.featureImage.file.url} swap={true} content={featureTextMarkup}/>
            </div>
            <Services pageBlocks={data.pageBlock} />
            <About/>
            <News/>
        </div>

    )
}
export default homeMainComponent