import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { Logo, Form, Toggle } from "../components";

const StyledHeader = styled.header`
    height: 7rem;
    display: flex;
    align-items: center;
    padding: 1rem 6rem;
    justify-content: flex-end;

    & button svg {
        font-size: 2rem;
        vertical-align: middle;
    }

    @media only screen and (max-width: 600px) {
        padding: 1rem 2rem;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 21rem);
    justify-content: center;
    align-items: center;
    margin-bottom: 7rem;

    @media only screen and (max-width: 600px) {
        margin-bottom: 1rem;    
    }

    & form {
        margin-top: 4rem;

        & svg {
            font-size: 2rem;
        }
    }


`;

const Home = () => {
    const { id, setTheme } = useContext(ThemeContext);

    return (
        <>
            <StyledHeader>
                <Toggle isDark={id === 'dark'} onToggle={setTheme} />
            </StyledHeader>
            <Container>
                <Logo width="280px" />
                <Form displaySpan />
            </Container>
        </>

    );
};

export default Home;
