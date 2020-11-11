import React from 'react'
import styled from 'styled-components'
import Button from '../button';
import Logo from '../logo';
import { Marginer } from '../marginer/index'


const NavbarContainer = styled.div`
    width: 100%;
    height: 50px;
    padding: 0 2em;
    display: flex;
    align-items: center;
    justify-content:space-between;
`;

const BrandContainer = styled.div``;

const AccessibilityContainer = styled.div`
    display: flex;
`;

const LoginButton = styled(Button)`
    background-color: transparent;
    border: none;

    &:hover {
        background-color: transparent;
        border: none;
        color: rgb(212, 212, 212);
    }
`;

export default function Navbar(props) {
    return (
        <NavbarContainer>
            <BrandContainer>
                <Logo inline />
            </BrandContainer>
            <AccessibilityContainer>
                <Button small>Get Started</Button>
                <Marginer direction="horizontal" margin="20px" />
                <LoginButton small>Login</LoginButton>
            </AccessibilityContainer>
        </NavbarContainer>
    )
}
