import styled from "styled-components";

const Button = styled.button`
    color: #fff;
    border: none;
    background-image: linear-gradient(to right, #0098f0, #00f2c3);
    padding: 1rem 1.5rem;
    border-radius: 5px;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    /* display: flex; */
    align-items: center;
    transition: all 0.3s;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 1rem 2rem #ccc;
    }

    &:focus {
        outline: 0;
        box-shadow: 0 1rem 2rem #ccc;
    }

    &:active {
        transform: scale(1);
    }
`;

export default Button;
