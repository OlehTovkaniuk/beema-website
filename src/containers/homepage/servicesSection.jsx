import React from 'react'
import { Element } from 'react-scroll'
import styled from 'styled-components'
import { Marginer } from '../../components/marginer'
import OurService from '../../components/ourService'
import { SectionTitle } from '../../components/sectionTitle'
import Service1Image from '../../assets/illustrations/web_development_.png'
import Service2Image from '../../assets/illustrations/mobile_phone.png'
import Service3Image from '../../assets/illustrations/bug_fixed.png'



const ServicesContainer = styled(Element)`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4em 0;
    @media screen and (max-width: 480px){
        padding: 4em 0 2em;
    }
`;

export default function ServicesSection(props) {
    return (
        <ServicesContainer name="servicesSection">
            <SectionTitle>Best Quality Software</SectionTitle>
            <Marginer direction="vertical" margin="4em" />
            <OurService
                title="Fully integrated services"
                description="We build and deliver fully integrated webapps
                    with customized control panels that fit your 
                    company needs"
                imgUrl={Service1Image}
            />
            <OurService
                title="Mobile optimized"
                description="Lorem Ipsum is simply dummy text of the
                 printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text."
                imgUrl={Service2Image}
                isReversed
            />
            <OurService
                title="Quality is our priority"
                description="We have teams of professional developers, designers
                    and managers that ensures delivering the best
                    software quality for your company"
                imgUrl={Service3Image}
            />
        </ServicesContainer>
    )
}
