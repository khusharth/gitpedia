import React from "react";
import loader from "../assets/loader.gif";
import styled from "styled-components";

const LoaderContainer = styled.div`
    height: calc(100vh - 150px);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Loader = () => {
    return (
        <LoaderContainer>
            <img src={loader} alt='Loader' height='100px' width='100px' />
        </LoaderContainer>
    );
};

export default Loader;
