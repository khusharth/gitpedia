import React from "react";
import logo from "../assets/logo.png";

const Logo = (props) => {
    return (
        <>
            <img
                src={logo}
                alt='logo'
                height={props.height}
                width={props.width}
            />
        </>
    );
};

export default Logo;
