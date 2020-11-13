import React from 'react'
import { Element } from 'react-scroll'
import styled from 'styled-components'
import { SectionTitle } from '../../components/sectionTitle'
import AboutImgUrl from '../../assets/illustrations/rocket_launch_.png'
import { Marginer } from '../../components/marginer/index'

const AboutContainer = styled(Element)`
    min-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;   
`;

const AboutContent = styled.div`
    display: flex;
    max-width: 900px;
    align-items: center;
    justify-content: center;
`;

const AboutText = styled.p`
    font-size: 18px;
    color: #2f2f2f;
`;

const AboutImg = styled.img`
    width: 550px;
    height: 400px;
    margin-left: 2em;
`;

export default function AboutSection(props) {
    return (
        <AboutContainer>
            <Marginer direction="vertical" margin="3em" />
            <SectionTitle>More About Beema</SectionTitle>
            <Marginer direction="vertical" margin="3em" />
            <AboutContent>
                <AboutText>
                    Beema is about designing, building and deliverying best quality software for your company.
                    {<br />}
                    {<br />}
                    We make sure that you get the best software inferstracture and set of applications to
                    ensure the best experience of your clients.
                    {<br />}
                    {<br />}
                    So wether you are handling thousands of payment transactions or you’re just starting out,
                    you are in the right place.
                </AboutText>
                <AboutImg src={AboutImgUrl} />
            </AboutContent>
            <Marginer direction="vertical" margin="3em" />
        </AboutContainer>
    )
}
