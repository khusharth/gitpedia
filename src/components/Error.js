import React from "react";
import styled from "styled-components";
import { GoAlert } from "react-icons/go";

const ErrorContainer = styled.div`
    height: calc(100vh - 130px);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ErrorDiv = styled.div`
    padding: 2rem 4rem;
    border-radius: 5px;
    background-color: ${(p) => p.theme.cardColor};
    box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, 0.2);

    & svg {
        vertical-align: middle;
        margin-bottom: 4px;
        margin-right: 1rem;
    }
`;

const Error = ({ error }) => {
    return (
        <>
            <ErrorContainer>
                <ErrorDiv>
                    <span>
                        <GoAlert />
                    </span>
                    {error.type === 404
                        ? "No user found! Please try again :)"
                        : "Oops! Some error occured. Please try again :)"}
                </ErrorDiv>
            </ErrorContainer>
        </>
    );
};

export default Error;
