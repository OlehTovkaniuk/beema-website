import React from 'react'
import styled, { isStyledComponent } from 'styled-components'
import ReviewsSection from './reviewsSection';
import ServicesSection from './servicesSection';
import TopSection from './topSection'

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
        </PageContainer>
    )
}
