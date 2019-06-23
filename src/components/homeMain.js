import React from "react";

const homeMain = () => {
    return (
        <div className="home-first-section d-flex align-items-center">
            <div className="col-md-12 d-flex content-col">
                <div className="col-md-8">
                    <h1 className="lato-bold">Addiction Recovery <br/>
                        for the Modern <br/>
                        World
                    </h1>
                    <button className="btn home-main-btn">REQUEST A DEMO</button>
                </div>
                <div className="home-mobile-div">
                    <img src="/images/mobile.png" loading="lazy"/>
                </div>
            </div>
        </div>
    )
}
export default homeMain