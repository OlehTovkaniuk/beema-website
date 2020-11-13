import React from 'react'
import styled, { isStyledComponent } from 'styled-components'
import ReviewsSection from './reviewsSection'
import ServicesSection from './servicesSection'
import TopSection from './topSection'
import AboutSection from './aboutSection'
import Footer from '../../components/footer'

const PageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export default function Homepage(props) {
    return (
        <PageContainer>
            <TopSection />
            <ServicesSection />
            <ReviewsSection />
            <AboutSection />
            <Footer />
        </PageContainer>
    )
}
