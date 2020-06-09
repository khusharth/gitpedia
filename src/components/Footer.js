import React from "react";
import styled from "styled-components";

const FooterConatiner = styled.footer`
    display: flex;
    text-align: center;
    flex-direction:column;
    align-items: center;
    height: 6rem;
    padding: 0 2rem 0.5rem 2rem;
    font-size: 1.4rem;
`;

const ProjectLink = styled.a`
    text-decoration: none;

    &:link,
    &:visited {
        color: #0098f0;
    }

    &:hover,
    &:active {
        text-decoration: underline;
    }
`;

const Footer = () => {
    return (
        <FooterConatiner>
            <div>
                If you like this project then you can show some love by giving it a star :)
            </div>
            <div>
                <ProjectLink
                    href="https://github.com/khusharth/gitpedia/"
                    target='_blank'
                    rel='noopener noreferrer'>
                    khusharth/gitpedia
                </ProjectLink>
            </div>
        </FooterConatiner>
    );
};

export default Footer;