import React from 'react'
import styled, { css } from 'styled-components'
import BeemaLogo from '../../assets/logo/logo_croped.png'
import { theme } from '../../theme'

const LogoContainer = styled.div`
    display: flex;
    flex-direction: ${({ inline }) => inline ? 'row' : 'column'};
    align-items: ${({ inline }) => inline && 'center'};
`;

const LogoImg = styled.img`
    width: 8em;
    height: 8em;
    ${({ inline }) => inline && css`
        width: 24px;
        height: 24px;
        margin-right: 8px;
    `};
        `;

const LogoText = styled.div`
    font-size: ${({ inline }) => inline ? '17px' : '42px'};
    color: ${({ inline }) => inline ? '#fff' : theme.primary};
    margin-top: ${({ inline }) => inline ? '0px' : '6px'};
    font-weight: 700;
`;

export default function Logo(props) {

    const { inline } = props;
    return (
        <LogoContainer inline={inline}>
            <LogoImg src={BeemaLogo} inline={inline} />
            <LogoText inline={inline}>Beema</LogoText>
        </LogoContainer>
    )
}
