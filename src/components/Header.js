import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Toggle from "./Toggle";
import Form from "./Form";

const StyledHeader = styled.header`
    background-color: ${p => p.theme.cardColor};
    min-height: 7rem;
    box-shadow: 0 1rem 2rem 0 rgba(0,0,0,0.1);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0.5rem 6rem;
    justify-content: space-between;

    @media only screen and (max-width: 767px) {
        padding: 0.5rem 2rem;
    }

    & input {
        font-size: 2rem;
    }


    & svg {
        vertical-align: middle;
        font-size: 2rem;
    }

    @media only screen and (max-width: 600px) {
        & input {
                margin-bottom: 5px;
                padding: 1rem;
                width: 75%;
            }

        & svg {
            vertical-align: unset;
        }
    }

    & a {
        margin-top: 0.5rem;
    }

    & a:focus {
        outline: none;
    }

    @media only screen and (max-width: 633px) {
        & form {
            order: 1;
            margin-top: 0.7rem;
            margin-left: auto;
            margin-right: auto;
        }
    }
`;

const Header = () => {
    const { id, setTheme } = useContext(ThemeContext);

    return (
        <StyledHeader>
            <Link to="/">
                <Logo width='180px' />
            </Link>
            <Form displaySpan={false} />
            <Toggle isDark={id === 'dark'} onToggle={setTheme} />
        </StyledHeader>
    );
};

export default Header;
