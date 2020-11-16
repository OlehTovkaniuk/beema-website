import React from 'react'
import styled, { isStyledComponent } from 'styled-components'
import BackgroundImg from '../../assets/pictures/company_team.jpg'
import Logo from '../../components/logo/index'
import { Marginer } from '../../components/marginer/index'
import Button from '../../components/button/index'
import DownArrow from '../../components/downArrow/index'
import Navbar from '../../components/navbar'
import { Element, scroller } from 'react-scroll'

const TopContainer = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0;
    background-image: url(${BackgroundImg});
    position: relative;
`;

const BackgroundFilter = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(53, 53, 53, 0.88);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MotivationalText = styled.h1`
    font-size: 34px;
    font-weight: 500;
    color: white;
    line-height: 1.5em;
    text-align: center;
`;

const DownArrowContainer = styled.div`
    position: absolute;
    bottom: 8vh;
    left: 50%;
    transform: translateX(-50%);
`;

export default function TopSection(props) {

    const scrollToNextSection = () => {
        scroller.scrollTo('servicesSection', { smooth: true, duration: 1200 });
    };

    return (
        <Element name="topSection">
            <TopContainer>
                <BackgroundFilter>
                    <Navbar />
                    <Marginer direction="vertical" margin="6vh" />
                    <Logo />
                    <Marginer direction="vertical" margin="6vh" />
                    <MotivationalText>Software Development</MotivationalText>
                    <MotivationalText>From the best in the industry</MotivationalText>
                    <Marginer direction="vertical" margin="5vh" />
                    <Button>Start your Project</Button>
                    <DownArrowContainer onClick={scrollToNextSection}>
                        <DownArrow />
                    </DownArrowContainer>
                </BackgroundFilter>
            </TopContainer>
        </Element>
    )
}
