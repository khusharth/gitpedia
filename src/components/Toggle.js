import React from "react";
import Button from "./Button";
import styled from "styled-components";
import { FaMoon, FaSun } from "react-icons/fa";

const ToggleSpan = styled.span`

    & svg {
            vertical-align: middle;
            font-size: 2rem;
        }
`;

const Toggle = ({ isDark, onToggle }) => {
    return (
        <ToggleSpan>
            <Button onClick={onToggle}>{isDark ? <FaMoon /> : <FaSun />}</Button>
        </ToggleSpan>
    )
};

export default Toggle;