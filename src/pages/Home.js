import React from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
import Form from "../components/Form";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 100px);
    justify-content: center;
    align-items: center;
`;

const Home = () => {
    return (
        <Container>
            <Logo />
            <Form />
        </Container>
    );
};

export default Home;
