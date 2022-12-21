import * as React from 'react';
import './style.scss';

const MainImageBanner = (props) => {
    return (
        <div className='mainImageBanner'>
             {props.image && (
              <GatsbyImage
                alt={props.image.alt}
                image={getImage(props.image.gatsbyImageData)}
                className="mainImage w-100"
              />
            )}
            <div className='overlay text-center text-white pt-lg-0 pt-md-3 pt-5'>
                <h1 className='pb-lg-5 pb-3'>{props.heading}</h1>
                <h3 className=''>{props.sub_heading}</h3>
            </div>
        </div>
    )
}

export default MainImageBanner;

export const query = graphql`
  fragment HomepageHeroContent on HomepageHero {
    id
    heading
    sub_heading
    image {
      id
      gatsbyImageData
      alt
    }
  }
`