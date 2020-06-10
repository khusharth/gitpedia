import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Toggle from "./Toggle";

const StyledHeader = styled.header`
    background-color: ${p => p.theme.cardColor};
    height: 7rem;
    box-shadow: 0 1rem 2rem 0 rgba(0,0,0,0.1);
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

    & a:focus {
        outline: none;
    }
`;

const Header = () => {
    const { id, setTheme } = useContext(ThemeContext);

    return (
        <StyledHeader>
            <Link to="/">
                <Logo width='180px' />
            </Link>
            <Toggle isDark={id === 'dark'} onToggle={setTheme} />
        </StyledHeader>
    );
};

export default Header;
