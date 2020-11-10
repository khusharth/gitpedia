import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import { FaSearch } from "react-icons/fa";

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    & button {
        padding: 1.2rem 1.5rem;
    }

    @media only screen and (max-width: 600px) {
        & button {
            align-self: flex-start;
        }
    }

    @media only screen and (max-width: 400px) {
        & button {
            height: auto;
        }
    }

    & span {
    }
`;

const Input = styled.input`
    font-size: 2.2rem;
    font-family: inherit;
    color: inherit;
    padding: 1.2rem 1.6rem;
    border-radius: 5px;
    border: none;
    background-color: ${(p) => p.theme.inputColor};
    border-bottom: 3px solid transparent;
    margin-left: 10px;
    margin-right: 15px;
    transition: all 0.3s;

    &:focus {
        outline: none;
        box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, 0.2);
        border-bottom: 3px solid #0098f0;
    }

    &::placeholder {
        color: #aaa;
    }

    @media only screen and (max-width: 600px) {
        text-align: center;
        margin: 0;
        margin-right: 15px;
        margin-bottom: 10px;
    }
`;

const Span = styled.span`
    font-size: 2.4rem;
    display: ${(p) => (p.displaySpan ? "inline-block" : "none")};

    @media only screen and (max-width: 600px) {
        display: none;
    }
`;

const SearchForm = ({ displaySpan }) => {
    const [user, updateUser] = useState("");
    const history = useHistory();

    const onFormSubmit = async (event, user) => {
        event.preventDefault();

        // If value of user is not blank then only go to next page
        if (user) {
            history.push(`/user/${user}`);
        }
    };

    return (
        <Form onSubmit={(e) => onFormSubmit(e, user)} displaySpan={displaySpan}>
            <Span> ~ $ git --view </Span>
            <Input
                value={user}
                onChange={(e) => updateUser(e.target.value)}
                type='text'
                placeholder='Enter Github Username'
            />
            <Button>
                <FaSearch />
            </Button>
        </Form>
    );
};

export default SearchForm;
