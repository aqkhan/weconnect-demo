import React from "react";

const homeNews = () => {
    return (
        <section className="home-news-section">
            <div className="col-md-12 d-flex p-0">
                <div className="col-md-6 d-flex justify-content-end align-items-center p-0">
                    <div className="content-div">
                        <h1 className="lato-regular">
                            WEconnect in the news
                        </h1>
                        <p className="lato-regular">
                            We are honored by the coverage we've received about our mission and products. Here's what
                            the press is saying about WEconnect.
                        </p>
                    </div>
                </div>
                <div className="col-md-6 p-0 logo-col">

                        <img src="/images/logo-pic.png" loading="lazy"/>
                </div>
            </div>
        </section>
    )
}
export default homeNews