import React from "react";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const homeMain = ({ content, headerBackground, headerBanner }) => {
    const contentMarkup = documentToHtmlString(JSON.parse(content.content));
    return (
        <div className="home-first-section d-flex align-items-center" style={{ backgroundImage: "url(" + headerBackground + ")" }}>
            <div className="col-md-12 d-flex content-col">
                <div className="col-md-8">
                    <h1 className="lato-bold">{ contentMarkup.replace(/(<([^>]+)>)/ig,"") }</h1>
                    <button className="btn home-main-btn">REQUEST A DEMO</button>
                </div>
                <div className="home-mobile-div">
                    <img src={headerBanner} loading="lazy" alt="" data-aos="zoom-in " />
                </div>
            </div>
        </div>
    )
}
export default homeMain