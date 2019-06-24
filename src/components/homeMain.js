import React from "react";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const homeMain = ({content, headerBackground, headerBanner}) => {
    console.log('content', documentToReactComponents(content.json.content[0]));
    return (
        <div className="home-first-section d-flex align-items-center" style={{backgroundImage: "url("+ headerBackground +")"}}>
            <div className="col-md-12 d-flex content-col">
                <div className="col-md-8">
                    <h1 className="lato-bold">Addiction Recovery <br/>
                        for the Modern <br/>
                        World
                    </h1>
                    <button className="btn home-main-btn">REQUEST A DEMO</button>
                </div>
                <div className="home-mobile-div">
                    <img src={headerBanner} loading="lazy" alt="" data-aos="zoom-in "/>
                </div>
            </div>
        </div>
    )
}
export default homeMain