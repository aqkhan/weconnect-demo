import React from "react";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const homePageServices = ({pageBlocks}) => {
    return (
        <section className="home-second-section">
            <div>
                <div className="container">
                    {
                        pageBlocks.map((single, i) => (
                            <div className="row service-card" key={i}>
                                <div className="col-md-6" data-aos="fade-right">
                                    <img src={single.image.file.url} className="card-image-two" alt=""/>
                                </div>
                                <div className="col-md-6 d-flex align-content-center justify-content-center flex-column" data-aos="fade-left">
                                    <div className="heading-with-icon d-flex">
                                        <div className="service-icon-div">
                                            <img src={ "https:" + single.icon.file.url } loading="lazy" alt=""/>
                                        </div>
                                        <h1 className="lato-bol">{ single.title }</h1>

                                    </div>
                                    <div dangerouslySetInnerHTML={{__html: documentToHtmlString(JSON.parse(single.content.content))}} />
                                    <div>
                                        <a href={single.linkTo} className="btn home-service-btn lato-regular">{ single.linkText }</a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}
export default homePageServices