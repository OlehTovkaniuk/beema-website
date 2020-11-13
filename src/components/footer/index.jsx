import React from 'react'
import styled from 'styled-components'
import Logo from '../logo';
import { Marginer } from '../marginer';

const FooterContainer = styled.div`
    min-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1F1F1F;
`;

export default function Footer(props) {
    return (
        <FooterContainer>
            <Marginer direction="vertical" margin="3.5em" />
            <Logo />
        </FooterContainer>
    )
}
