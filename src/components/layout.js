/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "../../static/css/bootstrap.min.css";
import "../../static/css/aos.css"
import Navigation from "./navigation";
import Footer from "./footer"
import AOS from "aos"

import "./layout.css"
const Layout = ({ children }) => {
    if (typeof window !== "undefined"){
        AOS.init();
    }
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Navigation siteTitle={data.site.siteMetadata.title} />
      <div
      >
        {children}

      </div>
    <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
