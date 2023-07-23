import React from 'react';
import styled from 'styled-components';
import { GoStar } from 'react-icons/go';

const FooterContainer = styled.footer`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  height: 6rem;
  padding: 0 2rem 1rem 2rem;
  font-size: 1.4rem;

  & svg {
    vertical-align: middle;
  }

  @media only screen and (max-width: 600px) {
    height: 8rem;
  }
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
    <FooterContainer>
      <div>
        If you like this project then you can show some love by giving it a <GoStar /> :)
      </div>
      <div>
        <ProjectLink
          href="https://github.com/khusharth/gitpedia/"
          target="_blank"
          rel="noopener noreferrer">
          khusharth/gitpedia
        </ProjectLink>
      </div>
    </FooterContainer>
  );
};

export default Footer;
