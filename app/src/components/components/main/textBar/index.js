import * as React from 'react'
import './style.scss';

const TextBar = (props) => {
    return (
        <div className='text_bar text-center py-5'>
            <div className='col-md-8 mx-auto'>
                <h3>{props.heading}</h3>
                <h5>{props.sub_heading}</h5>
            </div>
        </div>
    )
}

export default TextBar;

export const query = graphql`
  fragment HomepageTopTextBarContent on HomepageTopTextBar {
    id
    heading
    sub_heading
  }
`