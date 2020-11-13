import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import styled from 'styled-components'
import { Marginer } from '../../components/marginer/index'

const CardContainer = styled.div`
    width: 350px;
    height: 430px;
    background-color: #fff;
    box-shadow: 0px 0px 7px rgba(17, 17, 17, 0.2);
    border-radius: 3px;
    margin: 5px 0;
    position: relative;
    padding: 10px 1.2em;
`;

const QuoteIcon = styled.div`
    position: absolute;
    top: 13px;
    left: 17px;
    color: #d1d1d1;
    font-size: 37px;
`;

const ReviewText = styled.p`
    font-size: 17px;
    color: #585858;
    font-weight: normal;
    text-align: center;
    display: flex;
    justify-content: center;
`;

const Line = styled.span`
    width: 100%;
    height: 1px;
    background-color:#CDCDCD;
    margin-bottom: 1em;
    display: block
`;

const UserContainer = styled.div`
    display: flex;
    align-items: center;
`;

const UserImage = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-right: 12px;
`;

const UserName = styled.span`
    font-size: 15px;
    color: #000;
`;


export default function ReviewCard(props) {

    const { reviewText, userName, userImgUrl } = props;

    return (
        <CardContainer>
            <QuoteIcon>
                <FontAwesomeIcon icon={faQuoteLeft} />
            </QuoteIcon>
            <Marginer direction="vertical" margin="6em" />
            <ReviewText>{reviewText}</ReviewText>
            <Marginer direction="vertical" margin="7em" />
            <Line />
            <UserContainer>
                <UserImage src={userImgUrl} />
                <UserName>{userName}</UserName>
            </UserContainer>
        </CardContainer>
    )
}
