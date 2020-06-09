import React from "react";
import styled from "styled-components";
import { FaMoon, FaSun } from "react-icons/fa";
import Logo from "./Logo";
import Button from "./Button";


const StyledHeader = styled.header`
    background-color: #fff;
    /* background-color: #27293d; */
    height: 7rem;
    box-shadow: 0 1rem 2rem #eee;
    display: flex;
    align-items: center;
    padding: 1rem 6rem;
    justify-content: space-between;

    @media only screen and (max-width: 600px) {
        padding: 1rem 2rem;
    }

    & svg {
        vertical-align: middle;
        font-size: 2rem;
    }
`;

const Header = () => {
    return (
        <StyledHeader>
            <Logo width='180px' />
            <Button><FaSun /></Button>
        </StyledHeader>
    );
};

export default Header;
