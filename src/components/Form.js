import React, { useState } from "react";
import history from "../history";
import Button from "./Button";
import search from "../assets/search.svg";
import styled from "styled-components";
import github from "../api/github";

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2rem;
`;

const Input = styled.input`
    font-size: 2.2rem;
    font-family: inherit;
    color: inherit;
    padding: 1.2rem 1.6rem;
    border-radius: 5px;
    border: none;
    background-color: #fff;
    border-bottom: 3px solid transparent;
    margin-left: 10px;
    margin-right: 15px;
    transition: all 0.3s;

    &:focus {
        outline: none;
        box-shadow: 0 1rem 2rem #ccc;
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

    @media only screen and (max-width: 600px) {
        display: none;
    }
`;

const SearchForm = () => {
    const [user, updateUser] = useState("");

    const onFormSubmit = async (event, user) => {
        event.preventDefault();
        if (user) {
            console.log(user);
            const response = await github.get("/users/khusharth");
            console.log(response.data);
            history.push(`/user/${user}`);
        }
    };

    return (
        <Form onSubmit={(e) => onFormSubmit(e, user)}>
            <Span> ~ $ git --view </Span>
            <Input
                value={user}
                onChange={(e) => updateUser(e.target.value)}
                type='text'
                placeholder='Enter Github Username'
            />
            <Button>
                <img src={search} alt='search' />
            </Button>
        </Form>
    );
};

export default SearchForm;
