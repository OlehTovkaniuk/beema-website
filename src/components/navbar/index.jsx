import React from 'react'
import styled from 'styled-components'
import Logo from '../logo';


const NavbarContainer = styled.div`
    width: 100%;
    height: 50px;
    padding: 0 2em;
    display: flex;
    align-items: center;
`;

const BrandContainer = styled.div`

`;

const AccessibilityContainer = styled.div`

`;

export default function Navbar(props) {
    return (
        <NavbarContainer>
            <BrandContainer>
                <Logo inline />
            </BrandContainer>
        </NavbarContainer>
    )
}
