import React from 'react'
import styled from 'styled-components'


const ServiceContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${({ isReversed }) => isReversed ? 'row-reverse' : 'row'};
    margin-bottom: 4em;
`;

const ServiceImg = styled.img`
    width: 21em;
    height: 14em;
`;

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 60%;
`;

const Title = styled.h2`
    color: #000;
    font-size: 30px;
    margin-bottom: 0.6em;
    font-weight: 500;
    line-height: 1.4em;
`;

const Details = styled.p`
    color: #7a7a7a;
    font-size: 21px;
    text-align: center;
    max-width: 60%;

`;

export default function OurService(props) {

    const { title, description, imgUrl, isReversed } = props;

    return (
        <ServiceContainer isReversed={isReversed}>
            <DescriptionContainer>
                <Title>{title}</Title>
                <Details>{description}</Details>
            </DescriptionContainer>
            <ServiceImg src={imgUrl} />
        </ServiceContainer>
    )
}
