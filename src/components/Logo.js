import React from "react";
import logo from "../assets/logo-small.png";

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
        // <form>
        //     <span>~ $ git --view</span>
        //     <input type='text' placeholder='Enter Github Username' />
        // </form>
    );
};

export default Logo;
