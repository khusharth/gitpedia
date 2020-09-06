import styled from "styled-components";

const Button = styled.button`
    color: rgb(255,255,255);
    border: none;
    background-image: linear-gradient(to right, #0098f0, #00e1b5);
    padding: 1rem 1.5rem;
    border-radius: 5px;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    align-items: center;
    transition: all 0.3s;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 1rem 2rem 0 rgba(0,0,0, .2);
    }

    &:focus {
        outline: 0;
        box-shadow: 0 1rem 2rem 0 rgba(0,0,0, .2);
    }

    &:active {
        transform: scale(1);
    }
`;

export default Button;
