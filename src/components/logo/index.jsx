import React from 'react'
import styled, { css } from 'styled-components'
import BeemaLogo from '../../assets/logo/logo_croped.png'
import { theme } from '../../theme'

const LogoContainer = styled.div`
    display: flex;
    flex-direction: ${({ inline }) => inline ? 'row' : 'column'};
    align-items: center;
`;

const LogoImg = styled.img`
    width: 8em;
    height: 8em;
    ${({ inline }) => inline && css`
        width: 24px;
        height: 24px;
        margin-right: 8px;
    `};
    ${({ small }) => small && css`
        width: 4.5em;
        height: 4.5em;
    `};
        `;

const LogoText = styled.div`
    font-size: ${({ inline, small }) => inline ? '17px' : small ? '25px' : '42px'};
    color: ${({ inline }) => inline ? '#fff' : theme.primary};
    margin-top: ${({ inline }) => inline ? '0px' : '6px'};
    font-weight: 800;
`;

export default function Logo(props) {

    const { inline, small } = props;
    return (
        <LogoContainer inline={inline}>
            <LogoImg src={BeemaLogo} inline={inline} small={small} />
            <LogoText inline={inline} small={small}>Beema</LogoText>
        </LogoContainer>
    )
}
