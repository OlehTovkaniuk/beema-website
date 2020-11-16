import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import styled from 'styled-components'
import Button from '../button';
import Logo from '../logo';
import { Marginer } from '../marginer';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1F1F1F;
    position: relative;
    @media screen and (max-width: 480px){
        padding-bottom: 40px
    };
`;

const MotivationalText = styled.h1`
    font-size: 32px;
    font-weight: 500;
    color: white;
    line-height: 1.5em;

    @media screen and (max-width: 480px){
        font-size: 28px;
    }
`;

const StyledMotivationalText = styled(MotivationalText)`
    font-weight: 300;
`;

const AccessibilityContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #fff;
    width: 80%;
    color: white;
    padding: 1.5em 1em; 

    @media screen and (max-width: 480px){
        width: 90%;
        padding: 1em 0.5em;
        margin-bottom: 20px; 
    }
`;

const LinksContainer = styled.div`
    display: flex;
`;
const Link = styled.a`
    color: #fff;
    font-size: 11px;
    font-weight:500;
    letter-spacing: 0.08em;
    cursor: pointer;
    &:not(:last-of-type) {
        margin-right: 1em;

        @media screen and (max-width: 480px){
            margin-right: 6px;
        }
    }
    &:hover {
        color: #bbb;
    }
`;

const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    color: #fff;
    font-size: 20px;
    cursor: pointer;

    &:not(:last-of-type) {
        margin-right: 1em;
        @media screen and (max-width: 480px){
            margin-right: 10px;
        }
    }

    &:hover {
        color: #bbb;
    }

    @media screen and (max-width: 480px){
            font-size: 20px;
        }
`;

const RightReserved = styled.div`
    position: absolute;
    bottom: 1em;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    font-size: 12px;
    letter-spacing: 0.08em;
    text-align: center;
`;


export default function Footer(props) {
    return (
        <FooterContainer>
            <Marginer direction="vertical" margin="3.5em" />
            <Logo small />
            <Marginer direction="vertical" margin="1.8em" />
            <MotivationalText>Just say the magical word</MotivationalText>
            <StyledMotivationalText>and we will do the rest</StyledMotivationalText>
            <Marginer direction="vertical" margin="2em" />
            <Button>Start your Project</Button>
            <Marginer direction="vertical" margin="4em" />
            <AccessibilityContainer>
                <LinksContainer>
                    <Link>Privacy Policy</Link>
                    <Link>Terms of Service</Link>
                    <Link>Contact</Link>
                </LinksContainer>
                <SocialContainer>
                    <SocialIcon>
                        <FontAwesomeIcon icon={faTwitter} />
                    </SocialIcon>
                    <SocialIcon>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </SocialIcon>
                </SocialContainer>
            </AccessibilityContainer>

            <RightReserved> &copy; 2020 Beema All rights reserved</RightReserved>
        </FooterContainer>
    )
}
