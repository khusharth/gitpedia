import React, { useState, useEffect } from "react";
import GhPolyglot from "gh-polyglot";
import styled from "styled-components";
import { Header, Profile, MaterialTabs, Stats, Timeline, Activities, Footer, Loader, Error } from "../components";
import github from "../api/github";
import LanguageContext from "../contexts/LanguageContext";

const TabSection = styled.section`
    padding: 2rem 6rem;
    @media only screen and (max-width: 900px) {
        padding: 1.5rem 2rem;
    }
`;

const UserProfile = (props) => {
    const username = props.match.params.id;
    const [userData, setUserData] = useState({});
    const [repoData, setRepoData] = useState([]);
    const [langData, setLangData] = useState([]);
    const [activityData, setActivityData] = useState([]);
    // const [rateLimit, setRateLimit] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});

    const getUserData = async () => {
        setLoading(true);
        try {
            const response = await github.get(`/users/${username}`);
            setUserData(response.data);
            setLoading(false);

        } catch (error) {
            if (error.response) {
                if (error.response.status === 404) {
                    setError({ active: true, type: 404 });
                } else {
                    setError({ active: true, type: error.response.status });
                }

            } else {
                setError({ active: true, type: error });
                console.log(error);
            }
            setLoading(false);
        }


    };

    const getUserRepos = async () => {
        setLoading(true);

        try {
            const findTotalRepo = await github.get(`/users/${username}`);
            const totalRepo = findTotalRepo.data.public_repos;
            let totalRequest = 1;

            // To get more than 100 repo find number of requests needed to make
            if (totalRepo > 0) {
                totalRequest = Math.ceil(totalRepo / 100);
            }

            // Get 100 repo in each request and add them to the old array
            for (let i = 1; i < totalRequest + 1; i++) {
                let response = await github.get(
                    `/users/${username}/repos?per_page=100&page=${i}&sort=created:dsc`
                );
                setRepoData(oldArray => [...oldArray, ...response.data]);
            }

            setLoading(false);
        } catch (error) {
            if (error.response) {
                if (error.response.status === 404) {
                    setError({ active: true, type: 404 });
                } else {
                    setError({ active: true, type: error.response.status });
                }
            } else {
                setError({ active: true, type: error });
                console.log(error);
            }

            setLoading(false);
        }
    };

    // Using GhPolyglot library to get all the languages used
    const getLangData = () => {
        setLoading(true);
        const currentUser = new GhPolyglot(`${username}`);
        currentUser.userStats((err, stats) => {
            if (err) {
                setError({ active: true, type: err });
                console.log(err);
            }

            setLangData(stats);
        });
        setLoading(false);
    };

    const getActivityData = async () => {
        setLoading(true);
        try {
            const response = await github.get(
                `/users/${username}/events?per_page=30`
            );

            setActivityData(response.data);
            setLoading(false);

        } catch (error) {
            if (error.response) {
                if (error.response.status === 404) {
                    setError({ active: true, type: 404 });
                } else {
                    setError({ active: true, type: error.response.status });
                }
            } else {
                setError({ active: true, type: error });
                console.log(error);
            }

            setLoading(false);
        }
    };

    const getRateLimit = async () => {
        const response = await github.get("https://api.github.com/rate_limit");
        // setRateLimit(response.data.rate);
        console.log(response.data.rate);
    };

    useEffect(() => {
        getRateLimit();
        getUserData();
        getUserRepos();
        getLangData();
        getActivityData();
    }, []);

    if (loading) {
        return (
            <>
                <Header />
                <Loader />
            </>
        );
    } else {
        return (
            <>
                <Header />
                <main>
                    {error && error.active ? (
                        <Error error={error} />
                    ) : (

                            <LanguageContext.Provider value={langData}>
                                <Profile userData={userData} />
                                <TabSection>
                                    <MaterialTabs
                                        tab1={
                                            <Stats
                                                userData={userData}
                                                repoData={repoData}
                                                langData={langData}
                                            />
                                        }
                                        tab2={<Timeline repoData={repoData} />}
                                        tab3={
                                            <Activities activityData={activityData} />
                                        }
                                    />
                                </TabSection>
                            </LanguageContext.Provider>
                        )
                    }

                </main>
                <Footer />
            </>
        );
    }
};

export default UserProfile;
