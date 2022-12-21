import * as React from 'react'
import { Link } from 'gatsby'
import TextBar from '../textBar'
import './style.scss'

const TextImageSection = (props) => {
    console.log(props.allocation) 
    return (
        <div className={props.allocation === "left" || props.allocation === undefined ? "videoBanner d-flex" : "videoBanner d-flex flex-row-reverse"}>
            <div className='col-lg-6 col-12'>
                <Link to={props.link_url}>
                    <div className='video-box'>
                        <video 
                            autoPlay
                            poster={props.poster} 
                            loop 
                            width="100%"
                            style={{ display: 'block', visibility: 'visible' }} 
                            src={props.video_url} type="video/mp4"
                            data-xblocker="passed">
                        </video>
                    </div>
                    <div className='overlay text-center text-white'>
                        <h4 className='pb-3'>{props.video_title}</h4>
                        <h5>{props.video_instruction}</h5>
                    </div>
                </Link>
            </div>
            <div className='col-lg-6 col-12 d-flex align-items-center'>
                <TextBar
                    heading={"Heading"}
                    sub_heading={"Our regular developer has agreed to grant access to the back end of the website, if we can find someone who has the right skill set to work independently on the changes required."}  
                />
            </div>
        </div>
    )
}

export default TextImageSection;

export const query = graphql`
  fragment HomepageImageTextBarContent on HomepageImageTextBar {
    id
    heading
    sub_heading
    image {
      id
      gatsbyImageData
      alt
    }
    title
    image_instruction
  }
`