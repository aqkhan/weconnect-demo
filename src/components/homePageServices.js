import React from "react";

const homePageServices = () => {
    return (
        <section className="home-second-section">
            <div>
                <div className="container">
                    <div className="row service-card">
                        <div className="col-md-6">
                            <img src="/images/home-service-two.png" className="card-image-two"/>
                        </div>
                        <div className="col-md-6 d-flex align-content-center  justify-content-center flex-column">
                            <div className="heading-with-icon d-flex">
                                <div className="service-icon-div">
                                    <img src="/images/s-icon-1.png" loading="lazy"/>
                                </div>
                                <h1 className="lato-bol">Stay on track, stay connected</h1>

                            </div>
                            <p className="lato-regular">The WEconnect app helps you schedule routines to stay on track
                                for recovery.</p>

                            <ul>
                                <li className="lato-regular"> Gentle reminders</li>
                                <li className="lato-regular">Rewards for completion of recovery activities</li>
                                <li className="lato-regular">GPS verification for routine locations</li>
                            </ul>
                            <div>
                                <button className="btn home-service-btn lato-regular">Patients & Families: Learn More
                                </button>
                            </div>
                        </div>
                    </div>


                    <div className="row service-card">

                        <div className="col-md-6 d-flex align-content-center  justify-content-center flex-column">
                            <div className="heading-with-icon d-flex">
                                <div className="service-icon-div">
                                    <img src="/images/s-icon-2.png" loading="lazy"/>
                                </div>
                                <h1 className="lato-bol">Support from your recovery team</h1>

                            </div>
                            <p className="lato-regular">Developed by a team of data scientists and treatment experts and
                                based on techniques showing a 50% improvement in abstinence vs. traditional treatment
                                methods, WEconnect helps you stay connected and accountable on your recovery
                                journey.</p>

                            <div>
                                <button className="btn home-service-btn lato-regular">PProviders: Sign Up Now
                                </button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src="/images/laptop-srvice.png" className="card-image-two" loading="lazy"/>
                        </div>
                    </div>

                    <div className="row service-card">
                        <div className="col-md-6">
                            <img src="/images/s-img-4.png" className="card-image-two" loading="lazy"/>
                        </div>
                        <div className="col-md-6 d-flex align-content-center  justify-content-center flex-column">
                            <div className="heading-with-icon d-flex">
                                <div className="service-icon-div">
                                    <img src="/images/s-icon-3.png"/>
                                </div>
                                <h1 className="lato-bol">Earn gift cards by completing routines</h1>

                            </div>
                            <p className="lato-regular">By staying on track with your recovery plan, you can earn gift
                                cards in the app that you can use immediately! Why? Studies show that by sticking to a
                                routine, patients have a much greater chance of staying in recovery.</p>

                            <div>
                                <button className="btn home-service-btn lato-regular">Learn why rewards work
                                </button>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </section>
    )
}
export default homePageServices