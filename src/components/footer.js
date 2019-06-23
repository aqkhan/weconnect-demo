import React from "react"

const footer = () => {
    return (
        <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img src="/images/logo_footer.webp" alt=""/>
                    <p className="email lato-regular">
                        info@weconnectrecovery.com
                    </p>
                    <p className="number lato-regular">720.661.2231</p>
                </div>
                <div className="col-md-2">
                    <h1 className="lato-regular">Useful Links</h1>
                    <ul>
                        <li className="lato-regular"> Home</li>
                        <li className="lato-regular">Families</li>
                        <li className="lato-regular">Providers</li>
                        <li className="lato-regular">Research</li>
                        <li className="lato-regular">Download Apps</li>
                        <li className="lato-regular">Press</li>
                    </ul>
                </div>

                <div className="col-md-2">
                    <h1 className="lato-regular">About us</h1>
                    <ul>
                        <li className="lato-regular">About us</li>
                        <li className="lato-regular">Team</li>
                        <li className="lato-regular">Investors</li>
                        <li className="lato-regular">Cereers</li>
                        <li className="lato-regular">Contact</li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h1 className="lato-regular">Our Address</h1>
                    <p className="lato-regular adress">
                        Galvanize 111 S Jackson St. ,<br/>
                        Seattle, WA 98104, US
                    </p>
                </div>
            </div>
        </div>
        </footer>
    )
}
export default footer;