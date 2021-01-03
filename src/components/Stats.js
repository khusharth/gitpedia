import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GoRepo, GoOrganization, GoPerson, GoStar } from "react-icons/go";
import { DoughnutChart, PieChart, BarChart } from "./Chart";

const StatsContainer = styled.div`
    margin-top: 3rem;
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media only screen and (max-width: 600px) {
        justify-content: space-around;
    }
`;

const StatsDiv = styled.div`
    display: inline-block;
    background-color: ${(p) => {
        if (p.secondary) return "#00b7e1";
        else if (p.tertiary) return "#00cbbe";
        else if (p.quad) return "#00d0a7";
        else return "#0098f0";
    }};
    color: rgb(255, 255, 255);
    margin-top: 0;
    margin-right: 1rem;
    box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, 0.2);
    padding: 1.5rem 3rem;
    min-width: 25rem;
    border-radius: 5px;
    font-size: 2.2rem;

    & svg {
        vertical-align: middle;
    }

    @media only screen and (max-width: 1174px) {
        margin-top: ${(p) => (p.quad ? "2rem" : "0rem")};
    }

    @media only screen and (max-width: 749px) {
        margin-top: ${(p) => (p.tertiary || p.quad ? "2rem" : "0rem")};
    }

    @media only screen and (max-width: 600px) {
        text-align: center;
    }

    @media only screen and (max-width: 516px) {
        margin-top: ${(p) => (p.primary ? "0rem" : "2rem")};
    }

    @media only screen and (max-width: 498px) {
        margin-right: 0;
    }
`;

const RoundChartContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 3rem 0;

    @media only screen and (max-width: 1290px) {
        justify-content: space-around;
    }

    @media only screen and (max-width: 770px) {
        padding-bottom: 0;
    }
`;

const ChartDiv = styled.div`
    display: inline-block;
    margin-right: 1rem;
    padding: 1.5rem 6rem;
    padding: ${(p) => (p.chart1 ? "1.5rem 3rem" : "1.5rem 5rem")};
    max-height: 55rem;
    border-radius: 5px;
    min-width: 38rem;
    box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, 0.2);
    background-color: ${(p) => p.theme.cardColor};

    & canvas {
        max-height: 40rem;
    }

    @media only screen and (max-width: 1290px) {
        margin-top: ${(p) => (p.chart3 ? "5rem" : "0rem")};
    }

    @media only screen and (max-width: 1140px) {
        width: ${(p) => (p.tertiary ? "100%" : "0rem")};
    }

    @media only screen and (max-width: 770px) {
        min-width: 80%;
        margin-top: ${(p) => (p.chart3 ? "0rem" : "0rem")};
        margin-bottom: ${(p) => (p.chart5 ? "0rem" : "5rem")};
    }

    @media only screen and (max-width: 600px) {
        min-width: 100%;
    }
`;

const ChartHeading = styled.h1`
    font-weight: 400;
    font-size: 2.6rem;
    margin-bottom: 2rem;
    text-align: center;
`;

const IconSpan = styled.span`
    margin-left: 0.8rem;
    font-size: 1.7rem;
    font-weight: 500;
`;

const Stats = ({ userData, repoData }) => {
    const [starData, setStarData] = useState({});
    const [sizeData, setSizeData] = useState({});
    const [totalStars, setTotalStars] = useState(null);

    useEffect(() => {
        const getMostStarredRepos = () => {
            const LIMIT = 5;
            const sortProperty = "stargazers_count";
            const mostStarredRepos = repoData
                .filter((repo) => !repo.fork)
                .sort((a, b) => b[sortProperty] - a[sortProperty])
                .slice(0, LIMIT);

            // Label and data needed for  displaying Charts
            const label = mostStarredRepos.map((repo) => repo.name);
            const data = mostStarredRepos.map((repo) => repo[sortProperty]);

            setStarData({ label, data });
        };

        const getTotalStars = () => {
            const myRepos = repoData
                .filter((repo) => !repo.fork)
                .map((repo) => repo.stargazers_count);
            const totalStars = myRepos.reduce((a, b) => a + b, 0);

            setTotalStars(totalStars);
        };

        const getMaxSizeRepos = () => {
            const LIMIT = 5;
            const sortProperty = "size";
            const mostStarredRepos = repoData
                .filter((repo) => !repo.fork)
                .sort((a, b) => b[sortProperty] - a[sortProperty])
                .slice(0, LIMIT);

            const label = mostStarredRepos.map((repo) => repo.name);
            const data = mostStarredRepos.map((repo) => repo[sortProperty]);

            setSizeData({ label, data });
        };

        if (repoData.length) {
            getMostStarredRepos();
            getMaxSizeRepos();
            getTotalStars();
        }
    }, [repoData]);

    return (
        <>
            <StatsContainer>
                <StatsDiv primary>
                    <div>
                        <GoRepo />
                        <IconSpan>Repositories</IconSpan>
                    </div>
                    <h2>{userData.public_repos}</h2>
                </StatsDiv>
                <StatsDiv secondary>
                    <div>
                        <GoStar />
                        <IconSpan>Total Stars</IconSpan>
                    </div>
                    <h2>{totalStars}</h2>
                </StatsDiv>
                <StatsDiv tertiary>
                    <div>
                        <GoOrganization />
                        <IconSpan>Followers</IconSpan>
                    </div>
                    <h2>{userData.followers}</h2>
                </StatsDiv>
                <StatsDiv quad>
                    <div>
                        <GoPerson />
                        <IconSpan>Following</IconSpan>
                    </div>
                    <h2>{userData.following}</h2>
                </StatsDiv>
            </StatsContainer>

            <RoundChartContainer>
                <ChartDiv chart1>
                    <ChartHeading>Largest in Size(kb)</ChartHeading>
                    <BarChart sizeData={sizeData} />
                </ChartDiv>
                <ChartDiv>
                    <ChartHeading>Top Languages</ChartHeading>
                    <DoughnutChart />
                </ChartDiv>
                <ChartDiv chart3>
                    <ChartHeading>Most Starred</ChartHeading>
                    <PieChart starData={starData} width={100} />
                </ChartDiv>
            </RoundChartContainer>
        </>
    );
};

export default Stats;
