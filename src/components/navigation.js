import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react";
const Header = ({ siteTitle }) => (
  <header className="main-nav">
    <div className="container p-0">
    <div className="col-md-12 d-flex align-items-center">
    <div className="col-md-6">
    <div className="logo-div">
     <img src="/images/logo.png"/>
    </div>
    </div>
    <div className="col-md-6">
     <div className="nav-div">
      <ul>
        <li className="float-left lato-regular">FAMILIES</li>
        <li className="float-left lato-regular">PROVIDERS</li>
        <li className="float-left lato-regular">RESEARCH</li>
        <li className="float-left lato-regular">ABOUT</li>
        <li className="float-left lato-regular">REQUEST A DEMO</li>
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
