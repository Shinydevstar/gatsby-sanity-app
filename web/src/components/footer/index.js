import * as React from 'react'
import styled from 'styled-components'

const Footer = () => {

    const Footer = styled.div`
        background-color: #212429;
        margin-top: 40px;
        color: #fff;
    `
    const FooterContainer = styled.div`
        padding: 0px 80px;
    `

    const FooterNavHeading = styled.h5`
        font-family: Impact;
        text-transform: uppercase;
        margin-bottom: 20px;
    `
    const FooterNavItem = styled.a`
        font-size: 18px;
        text-decoration: none;
        color: #fff;
        cursor: pointer;
        :hover {
            color: #cf8030;
        }
    `

    const FooterLeftSubNav = styled.div`
        padding: 80px 0px 20px 0px;
        border-right: 1px solid hsla(0,0%,100%,.1);
    `
    const FooterRightSubNav = styled.div`
        padding: 80px 80px;
    `
    const FooterEmailBox = styled.div`
        height: 48px;
        display: flex;
        align-items: center;
        margin-top: 20px;
    `

    const FooterInput = styled.input`
        height: 100%;
        width: 300px;
        background-color: #383A3F;
        padding: 0px 5px 0px 20px;
        border: none;
        color: #fff;
        font-size: 18px;
    `
    const FooterSubscribeButton = styled.button`
        background-color: #fff;
        height: 100%;
        width: 160px;
        border: none;
        margin-left: 10px;
        font-size: 24px;
        text-transform: uppercase;
        font-family: Impact;
    `
    const SiteInfo = styled.p`
        color: #fff;
        margin-top: 40px;
    `

    const FooterSubNav = props => (
        props.sub_nav_data.map((item, index) => {
            return (
                <div key={index}>
                   <FooterNavItem to=""><p>{item.sub_nav_item}</p></FooterNavItem> 
                </div>
            )
        })
    )

    return (
        <Footer>
            <FooterContainer className='footer_container'>
                <div className='row'>
                    <div className='col-xl-4 col-lg-6 col-md-12 col-12'>
                        <FooterLeftSubNav className='footer_left_subnav'>
                            <div className='row'>
                                <div className='col-md-7 col-sm-12 col-12 pb-3'>
                                    <FooterNavHeading className='footer_nav_heading'>quick links</FooterNavHeading>
                                    <div className='row'>
                                        <div className='col-md-6 col-6'>
                                            <FooterSubNav 
                                                sub_nav_data={[
                                                    { id: 1, sub_nav_item: 'Home' },
                                                    { id: 2, sub_nav_item: 'Stockists' },
                                                    { id: 3, sub_nav_item: 'Privacy Policy' },
                                                    { id: 4, sub_nav_item: 'Ambassador Portal' },
                                                ]} 
                                            />
                                        </div>
                                        <div className='col-6'>
                                            <FooterSubNav 
                                                sub_nav_data={[
                                                    { id: 1, sub_nav_item: 'Blog' },
                                                    { id: 2, sub_nav_item: 'Contact' },
                                                    { id: 3, sub_nav_item: 'Terms of Service' },
                                                ]} 
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-5 col-sm-6'>
                                    <FooterNavHeading className='footer_nav_heading'>blog</FooterNavHeading>
                                        <FooterSubNav 
                                            sub_nav_data={[
                                                { id: 1, sub_nav_item: 'Fat vs Fat Loss' },
                                                { id: 2, sub_nav_item: 'Adrenal Fatigue' },
                                                { id: 3, sub_nav_item: 'Muscle Growth' },
                                            ]} 
                                        />
                                </div>
                            </div>
                        </FooterLeftSubNav>                       
                    </div>
                    <div className='col-xl-8 col-lg-6 col-md-12 col-12'>
                        <FooterRightSubNav className='footer_right_subnav'>
                            <FooterNavHeading className='footer_nav_heading'>join our mailing list</FooterNavHeading>
                            <FooterEmailBox className='d-xl-flex d-block'>
                                <FooterInput className='footer_input' type="email" name="email" placeholder='Your email address' />
                                <FooterSubscribeButton className='footer_subscribe_button'>Subscribe</FooterSubscribeButton>
                            </FooterEmailBox>
                            <SiteInfo className='site_info'>© 2022 Inception Labs Limited</SiteInfo>
                        </FooterRightSubNav>
                    </div>
                </div>
            </FooterContainer>
        </Footer>
    )
}

export default Footer;