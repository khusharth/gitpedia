import React from "react";
import styled from "styled-components";
import { GoRepo, GoRepoForked, GoStar, GoPrimitiveDot } from "react-icons/go";

const ItemContainer = styled.div`
    display: inline-block;
    background-color: ${p => p.theme.cardColor};
    padding: 2rem;
    border-radius: 5px;
    box-shadow: 0 1rem 2rem 0 rgb(0,0,0,0.2);
    min-width: 30rem;

    & h1 {
        padding-bottom: 1.5rem;
        font-weight: 500;
    }

    @media only screen and (max-width: 600px) {
        width: 100%;
    }
`;

const FooterSpan = styled.span`
    display: ${(p) => p.available ? "inline" : "none"};
    font-size: 1.5rem;
    margin-right: 1rem;
`;

const ItemFooter = styled.div`
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
`;

const TimelineItem = ({ title, description, language, forks, size, stars, url }) => {
    return (
        <>
            <a
                href={url}
                target='_blank'
                rel='noopener noreferrer'>

                <ItemContainer>
                    <h1>
                        <span><GoRepo /></span> {title}
                    </h1>
                    <div>{description}</div>
                    <ItemFooter>
                        <div>
                            <FooterSpan available={language} ><GoPrimitiveDot /> {language}</FooterSpan>
                            <FooterSpan available><GoStar /> {stars}</FooterSpan>
                            <FooterSpan available><GoRepoForked /> {forks}</FooterSpan>
                        </div>
                        <div>{Number(size).toLocaleString()} Kb</div>
                    </ItemFooter>
                </ItemContainer>
            </a>
        </>
    );
};

export default TimelineItem;
