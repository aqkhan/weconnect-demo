import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react";
const Header = ({siteTitle}) => (
    <header className="main-nav">
        <div className="container-fluid p-0 navigation-container">
            <div className="col-md-12 d-flex align-items-center">
                <div className="col-md-6">
                    <div className="logo-div">
                        <Link to="/">   <img src="/images/logo.webp" alt=""/></Link>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="nav-div d-flex justify-content-end">
                        <ul>
                            <li className="float-left lato-regular"><Link to="/families">FAMILIES</Link></li>
                            <li className="float-left lato-regular"><Link to="/providers">PROVIDERS</Link></li>
                            <li className="float-left lato-regular"><Link to="/research">RESEARCH</Link></li>
                            <li className="float-left lato-regular"><Link to="/about">ABOUT</Link></li>
                            <li className="float-left lato-regular nav-btn">REQUEST A DEMO</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
