import * as React from 'react'
import { Link } from 'gatsby'
import './style.scss';

const ImageBar = (props) => {

    return (
        <div className='imageBar'>
            <div className='row'>
                {props.video_data.map((item, index) => {
                    return (
                        <div className='col-md-4 col-sm-12 pb-3' key={index}>
                            <Link to="" className='videoBox'>
                                <div className='overlay'></div>
                                <video 
                                    poster={item.poster_url} 
                                    width="100%" 
                                    height="100%" 
                                    style={{ display: 'block', visibility: 'visible' }}
                                    // src="blob:https://inception-labs.com/42899f18-6517-4351-a3e6-caa421444e30" 
                                    data-xblocker="passed">
                                </video>
                                <div className='overlay_text text-white px-3'>
                                    <h6 className='mb-0'>{item.video_title}</h6>
                                    <span>{item.created_date}</span>
                                    <p className='mt-3 mb-0 d-xl-block d-none'>{item.intro_text}</p>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ImageBar;

export const query = graphql`
  fragment HomepageImageBarContent on HomepageImageBar {
    id
    image {
      id
      gatsbyImageData
      alt
    }
    title
    image_info
  }
`