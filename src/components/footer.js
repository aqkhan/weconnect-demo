import React from "react"

const footer = () => {
    return (
        <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img src="/images/logo_footer.png"/>
                    <p className="email lato-regular">
                        info@weconnectrecovery.com
                    </p>
                    <p className="number lato-regular">720.661.2231</p>
                </div>
                <div className="col-md-2">
                    <h1 className="lato-regular">Useful Links</h1>
                    <ul>
                        <li className="lato-regular"><a href="#">Home</a></li>
                        <li className="lato-regular"><a href="#">Families</a></li>
                        <li className="lato-regular"><a href="#">Providers</a></li>
                        <li className="lato-regular"><a href="#">Research</a></li>
                        <li className="lato-regular"><a href="#">Download Apps</a></li>
                        <li className="lato-regular"><a href="#">Press</a></li>
                    </ul>
                </div>

                <div className="col-md-2">
                    <h1 className="lato-regular">About us</h1>
                    <ul>
                        <li className="lato-regular"><a href="#">About us</a></li>
                        <li className="lato-regular"><a href="#">Team</a></li>
                        <li className="lato-regular"><a href="#">Investors</a></li>
                        <li className="lato-regular"><a href="#">Cereers</a></li>
                        <li className="lato-regular"><a href="#">Contact</a></li>
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