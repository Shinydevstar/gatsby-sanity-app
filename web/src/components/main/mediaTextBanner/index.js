import * as React from 'react'
import { Link } from 'gatsby'
import Headline from '../headline'
import SanityMuxPlayer from "sanity-mux-player";
import {GatsbyImage} from 'gatsby-plugin-image';
import './style.scss'

const MediaTextBanner = (props) => {

    const { data } = props

    return (
        <>
        <div className={data.media.media_allocation === "left" || data.media.media_allocation === undefined ? "videoBanner d-flex" : "videoBanner d-flex flex-row-reverse"}>
            <div className='col-lg-6 col-12'>
                <Link to={data.media.media_link} target={data.media.new_tab === true ? "_blank" : "_self" }>
                    <div className='video-box'>
                    {
                        data.media.video ?
                        <SanityMuxPlayer
                            className={"w-100"}
                            assetDocument={data.media.video.asset}
                            autoload={true}
                            autoplay={true}
                            loop={true}
                            muted={true}
                            showControls={true}
                        />
                        :
                        <GatsbyImage alt="" className={"w-100"} image={data.media.image && data.media.image.asset.gatsbyImageData}/>
                    }
                    </div>
                    <div className='overlay text-center text-white'>
                        <h4 className='pb-3'>{data.media.title}</h4>
                        <h5>{data.media.media_instruction}</h5>
                    </div>
                </Link>
            </div>
            <div className='col-lg-6 col-12 d-flex align-items-center'>
                <Headline
                    data={data.mediaText} 
                    headingStyle={"mediaTextHeading"}
                    contentStyle={"mediaTextContent"}
                />
            </div>
        </div>
    </>
    )
}

export default MediaTextBanner;