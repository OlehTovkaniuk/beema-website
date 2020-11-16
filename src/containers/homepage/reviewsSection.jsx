import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../components/sectionTitle'
import { Marginer } from '../../components/marginer/index'
import { Element } from 'react-scroll';
import ReviewCard from '../../components/reviewCard';
import { useMediaQuery } from "react-responsive"

import { CarouselProvider, DotGroup, Slide, Slider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import User1Image from '../../assets/pictures/profile_picture_1.jpg'
import User2Image from '../../assets/pictures/profile_picture_2.jpg'
import User3Image from '../../assets/pictures/profile_picture_3.jpg'
import User4Image from '../../assets/pictures/profile_picture_4.jpeg'


const ReviewsContainer = styled(Element)`
    height:800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fafafa;
    padding-top: 5em;
`;

const StyledCarouselProvider = styled(CarouselProvider)`
    width: 60%;

    @media screen and (max-width: 480px){
        width: 100%;
    }
`;

const StyledSlide = styled(Slide)`
    .carousel__inner-slide {
    display: flex;
    justify-content: center;
        & div {
            outline: none;
        }
    }
`;

const StyledDotGroup = styled(DotGroup)`
    display: flex;
    justify-content: center;

    button {
        width: 11px;
        height: 11px;
        border-radius: 50%;
        background-color: #E4E4E4;
        border: none;
        outline: none;

        &:not(:last-of-type) {
            margin-right: 4px;
        }
    }

    button.carousel__dot--selected {
        background-color: #C4C4C4;
    }
`;


export default function ReviewsSection(props) {

    const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

    return (
        <ReviewsContainer>
            <SectionTitle>What others are saying about us</SectionTitle>
            <Marginer direction="vertical" margin="3em" />
            <StyledCarouselProvider
                naturalSlideHeight={isMobile ? '250px' : '230px'}
                naturalSlideWidth="200"
                totalSlides={4}
                visibleSlides={isMobile ? 1 : 2}
                dragEnabled={false}
            >
                <Slider>
                    <StyledSlide index={0}>
                        <ReviewCard
                            reviewText="I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us."
                            userName="Megan Borguer"
                            userImgUrl={User1Image}
                        />
                    </StyledSlide>
                    <StyledSlide index={1}>
                        <ReviewCard
                            reviewText="I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us."
                            userName="John Coner"
                            userImgUrl={User2Image}
                        />
                    </StyledSlide>
                    <StyledSlide index={2}>
                        <ReviewCard
                            reviewText="I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us."
                            userName="Saul Alvarez"
                            userImgUrl={User3Image}
                        />
                    </StyledSlide>
                    <StyledSlide index={3}>
                        <ReviewCard
                            reviewText="I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us."
                            userName="Naoya Inoue"
                            userImgUrl={User4Image}
                        />
                    </StyledSlide>
                </Slider>
                <StyledDotGroup />
            </StyledCarouselProvider>
        </ReviewsContainer>
    )
}
