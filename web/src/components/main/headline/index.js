import * as React from 'react'
import './style.scss';

const Headline = (props) => {

    const { data, headingStyle, contentStyle } = props;

    return (
        <div className='text_bar text-center py-5'>
            <div className='col-md-8 mx-auto'>
                <h3 className={headingStyle ? headingStyle : ''}>{data.heading}</h3>
                <h5 className={contentStyle ? contentStyle : ''}>{data.text_content}</h5>
            </div>
        </div>
    )
}

export default Headline;