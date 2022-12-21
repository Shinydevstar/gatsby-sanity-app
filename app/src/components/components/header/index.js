import React, { useState } from 'react';
import { StaticImage } from "gatsby-plugin-image";
import { Link } from 'gatsby'
import { nav_link_data } from '../../../assets/demo';
import { GatsbyImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from "gatsby"
import './style.scss';

const Header = () => {

    

    const [  responsiveNav, setResponsiveNav ] = useState(false);
    // const { data } = props;

    const showResponsiveNav = (element) => {
        element.classList.toggle("responsive_nav_animated_button");
        setResponsiveNav(!responsiveNav);
    }
    return (
        <div>
            <div className='header'>
                <div className='header-container px-md-5 px-3'>
                    <div className='row'>
                        <div className='col-xl-5 col-3 d-flex' style={{ paddingTop: '35px', paddingBottom: '35px' }}>
                            <div className='logo-box'>
                                {/* {data ? (
                                    <GatsbyImage
                                        alt=""
                                        className="logoImage"
                                        image={data}
                                    />
                                ) : null} */}
                                <StaticImage src='../../assets/images/logo.png' alt='' className='logoImage' />
                            </div>
                            <div className='search-box d-xl-flex d-none align-items-center'>
                                <input type="text" name="search" className='search-input' placeholder='Search...' />
                                <div className='search-icon-box d-flex align-items-center justify-content-center'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-7 col-9'>
                            <div className='nav d-lg-flex d-none align-items-center justify-content-end h-100'>
                                {nav_link_data.map((item, index) => {
                                    return (
                                        <Link to={""} key={index}>
                                            <div className='nav-item d-flex align-items-center justify-content-center'>
                                                {item.icon}
                                                <span className="nav-item-title">{item.link_name}</span>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                            <div className='responsive_nav d-lg-none d-flex align-items-center justify-content-end h-100'>
                                <div className='responsive_nav_button' onClick={(e)=>showResponsiveNav(e.currentTarget)}>
                                    <div className='top_line'></div>
                                    <div className='middle_line'></div>
                                    <div className='bottom_line'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {responsiveNav && (
                        <div className='responsive_nav_menu_box'>
                            <div className='search-box d-flex align-items-center'>
                                <input type="text" name="search" className='search-input w-100' placeholder='Search...' />
                                <div className='search-icon-box d-flex align-items-center justify-content-center'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className='responsive_nav_menu'>
                                {nav_link_data.map((item, index) => {
                                    return (
                                        <div className='pb-4'><Link to="">{item.icon}<span className='responsive_nav_menu_item'>{item.link_name}</span></Link></div>
                                    )
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header;
