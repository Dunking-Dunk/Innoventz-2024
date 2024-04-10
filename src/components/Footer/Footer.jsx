import React from "react";
import Styled from 'styled-components';
import { AiOutlineArrowRight } from 'react-icons/ai';
import logo from "../../assets/logo.png";
import instagramIcon from "../../assets/images/nav-icon3.svg";

const Footer = () => {
    return (
        <Container>
            <LinkContainer>
                <LogoContainer>
                    <a href="/">
                        <img src={logo} alt="Logo" />
                    </a>
                </LogoContainer>
                <SocialContainer>
                    {/* <Title>Let's Connect</Title> */}
                    <LinkList><a href="https://www.instagram.com/innoventzz_rec/"><img src={instagramIcon} alt="Instagram" /></a></LinkList>
                </SocialContainer>
            </LinkContainer>
            <BottomContainer>
                <Para>Innoventz © 2024. All Rights Reserved</Para>
            </BottomContainer>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <LogoContainer>
                    <p>Website Developed By</p>
                </LogoContainer>
                <SocialContainer>
                    <LinkList><a href="https://www.linkedin.com/in/hursun-ss-377659233/">Hursun</a></LinkList>
                    <LinkList><a href="https://www.linkedin.com/in/prajeinck/">Prajein</a></LinkList>
                </SocialContainer>
            </div>
        </Container>
    )
}

export default Footer;

const Container = Styled.div`
    margin-top: 2rem;
    padding: 3rem 2rem;
    background-color: #282c34;
    background: linear-gradient(0deg, rgba(40, 44, 52, 1) 0%, rgba(17, 0, 32, .5) 100%);
    backdrop-filter: blur(7px);
    width: 100%;
    font-size: 1.5rem; /* Increase font size */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const LinkContainer = Styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 4rem; /* Increase the gap between the logo and the Instagram logo */
    margin-bottom: 3rem;
`

const LogoContainer = Styled.div`
    img {
        width: 150px; /* Increase the size of the main logo */
        height: auto;
    }
`

const SocialContainer = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`

const Title = Styled.h3`
    font-size: 2rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 2rem;
`

const Para = Styled.p`
    font-size: 1.5rem;
    font-weight: 400;
    opacity: 0.6;
    margin-bottom: 3rem;
`

const LinkList = Styled.div`
img {
    width:8rem;
    height: 8rem;
}
    a{
        color: white;
        text-decoration: none;
        font-size: 2rem;
        font-weight: 600;
    }
`


const BottomContainer = Styled.div`
    width: 100%;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
`
