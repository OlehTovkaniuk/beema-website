import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'

const ButtonWrapper = styled.button`
    padding: 8px 15px;
    color: #fff;
    background-color: ${theme.primary};
    border-radius: 5px;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.05em;
    border: 2px solid transparent;
    outline: none;
    transition: 0.22s all ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: transparent;
        border: 2px solid ${theme.primary};
    }
`;

export default function Button(props) {
    return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
}
