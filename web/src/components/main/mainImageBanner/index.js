import * as React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image'
import './style.scss';

const MainImageBanner = (props) => {

    const { data } = props;

    return (
        <div className='mainImageBanner'>
            {data ? (
                <GatsbyImage
                    alt=""
                    className="mainImage w-100"
                    image={data.image.asset.gatsbyImageData}
                />
            ) : null}
            <div className='overlay text-center text-white pt-lg-0 pt-md-3 pt-5'>
                <h1 className='pb-lg-5 pb-3'>{data.heading}</h1>
                <h3 className=''>{data.sub_heading}</h3>
            </div>
        </div>
    )
}

export default MainImageBanner;