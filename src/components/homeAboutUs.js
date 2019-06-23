import React from "react";

const homeAbout = () => {
    return (
        <section className="home-about-section">
            <div className="col-md-12 d-flex">
                <div className="col-md-6 d-flex justify-content-end flex-column">
                    <div className="iframe-div">
                        <iframe height="600" src="https://www.youtube.com/embed/2xfm8RlTGTo" frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen title="title" loading="lazy"/>
                    </div>

                </div>
                <div className="col-md-6 d-flex justify-content-center flex-column p-0">
                    <div className="content-div">
                    <span className="lato-regular">About Us</span>
                    <p className="lato-regular">Weconnect's team includes some of the brightest minds in recovery, data science, medicine,
                        engineering, technology, business, and design. Think you've got what it takes to be a part?
                    </p>
                    <p className="lato-regular">Our mission is to save lives, provide accurate outcomes data, and support healthcare
                        ecosystems, communities and families. Born from our co-founder’s personal journeys in
                        long-term recovery, WEconnect is a Social Purpose “B Corporation” with a focus on ending
                        addiction around the world.</p></div>
                </div>
            </div>
        </section>
    )
}
export default homeAbout