import * as React from 'react'
import { Link } from 'gatsby'
import SanityMuxPlayer from "sanity-mux-player";
import {GatsbyImage} from 'gatsby-plugin-image';
import './style.scss';

const ProductImageBanner = (props) => {

    const { data } = props;
    console.log('productImage', data)

    return (
        <div className='imageBar'>
            <div className='row'>
                {data.media.map((item, index) => {
                    return (
                        <div className='col-md-4 col-sm-12 pb-3' key={index}>
                            <Link to={item.media_link} className='videoBox' target={item.new_tab === true ? "_blank" : "_self" }>
                                <div className='overlay'></div>
                                {
                                    item.video ?
                                    <SanityMuxPlayer
                                        assetDocument={item.video.asset}
                                        autoload={true}
                                        autoplay={true}
                                        loop={true}
                                        muted={true}
                                        showControls={true}
                                    />
                                    :
                                    <GatsbyImage alt="" image={item.image && item.image.asset.gatsbyImageData}/>
                                }
                                <div className='overlay_text text-white px-3'>
                                    <h6 className='mb-0'>{item.title}</h6>
                                    <span>{item.date}</span>
                                    <p className='mt-3 mb-0 d-xl-block d-none'>{item.media_info}</p>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductImageBanner;