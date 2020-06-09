import React from "react";
import styled from "styled-components";
import TimelineItem from "./TimelineItem";

const TimelineContainer = styled.div`
    position: relative;
    margin: 3rem auto;
    width: 100rem;

    &:before {
        content: "";
        position: absolute;
        left: 50%;
        width: 2px;
        height: 100%;
        background: #c5c5c5;

        @media only screen and (max-width: 767px) {
            left: 20px;
        }
    }

    & ul {
        padding: 0;
        margin: 0;
    }

    & ul li {
        position: relative;
        line-height: normal;
        width: 50%;
        padding: 2rem 4rem 4rem 4rem;
        box-sizing: border-box;

        @media only screen and (max-width: 767px) {
            margin-bottom: 3rem;
        }

        @media only screen and (max-width: 600px) {
            padding: 2rem 0rem 4rem 4rem;
        }
    }

    & ul li a {
        text-decoration: none;
        color: inherit;
    }

    & ul li h1 svg {
        vertical-align: middle;
    }

    & ul li:nth-child(odd) {
        float: left;
        text-align: right;
        clear: both;

        @media only screen and (max-width: 767px) {
            width: 100%;
            text-align: left;
            padding-left: 5rem;
            padding-bottom: 5rem;
        }
    }

    & ul li:nth-child(even) {
        float: right;
        text-align: left;
        clear: both;

        @media only screen and (max-width: 767px) {
            width: 100%;
            text-align: left;
            padding-left: 5rem;
            padding-bottom: 5rem;
        }
    }

    & ul li:nth-child(odd):before {
        content: "";
        position: absolute;
        right: -7px;
        top: 25px;
        width: 13px;
        height: 13px;
        background-image: linear-gradient(to right, #0098f0, #00f2c3);
        border-radius: 50%;
        box-shadow: 0 0 0 4px rgba(0, 242, 195, 0.2);

        @media only screen and (max-width: 767px) {
            top: -18px;
            left: 14px;
        }
    }

    & ul li:nth-child(even):before {
        content: "";
        position: absolute;
        left: -5px;
        top: 25px;
        width: 13px;
        height: 13px;
        background-image: linear-gradient(to right, #0098f0, #00f2c3);
        border-radius: 50%;
        box-shadow: 0 0 0 4px rgba(0, 242, 195, 0.2);

        @media only screen and (max-width: 767px) {
            top: -18px;
            left: 14px;
        }
    }

    & ul li:nth-child(odd) .time {
        position: absolute;
        top: 12px;
        right: -165px;

        @media only screen and (max-width: 767px) {
            top: -30px;
            left: 50px;
            right: inherit;
        }
    }

    & ul li:nth-child(even) .time {
        position: absolute;
        top: 12px;
        left: -165px;

        @media only screen and (max-width: 767px) {
            top: -30px;
            left: 50px;
            right: inherit;
        }
    }

    

    & ul li .time h4 {
        font-size: 14px;
        font-weight: 500;
    }

    @media only screen and (max-width: 1000px) {
        width: 100%;
    }

    @media only screen and (max-width: 767px) {
        width: 100%;
        margin-top: 7rem;
        padding-bottom: 0;
    }
`;

const TimeDiv = styled.div`
    background-image: linear-gradient(to right, #0098f0, #00f2c3);
    margin: 0;
    padding: 8px 16px;
    color: #fff;
    border-radius: 18px;
    box-shadow: 0 0 0 3px rgba(0, 242, 195, 0.2);
`;

const ClearFloat = styled.div`
    clear: both;
`;

const Timeline = ({ repoData }) => {

    const buildRepoTimeline = () => {
        return repoData.map((repo) => (
            <li key={repo.id}>
                <TimelineItem
                    title={repo.name}
                    description={repo.description}
                    language={repo.language}
                    stars={repo.stargazers_count}
                    forks={repo.forks_count}
                    size={repo.size}
                    url={repo.html_url}
                />
                <TimeDiv className='time'>
                    <h4>{new Date(repo.updated_at).toDateString().split(" ").slice(1).join(" ")}</h4>
                </TimeDiv>
            </li>
        ));
    };

    return (
        <>
            <TimelineContainer>
                <ul>
                    {buildRepoTimeline()}
                    <ClearFloat />
                </ul>
            </TimelineContainer>
        </>
    );
};

export default Timeline;
