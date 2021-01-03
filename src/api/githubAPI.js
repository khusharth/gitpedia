import { useState, useEffect } from "react";
import GhPolyglot from "gh-polyglot";
import github from "./base";

export const useGithubUserData = (username) => {
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});

    useEffect(() => {
        if (!username) return;

        const getUserData = async () => {
            try {
                setLoading(true);
                setError({ active: false, type: 200 });

                const response = await github.get(`/users/${username}`);
                setUserData(response.data);
                setLoading(false);
            } catch (error) {
                console.log("Error", error);
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
        getUserData();
    }, [username]);

    return [userData, loading, error];
};

// Using GhPolyglot library to get all the languages used
export const useLangData = (username) => {
    const [langData, setLangData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});

    useEffect(() => {
        const getLangData = () => {
            setLoading(true);
            setError({ active: false, type: 200 });

            const currentUser = new GhPolyglot(`${username}`);
            currentUser.userStats((err, stats) => {
                if (err === "Not Found") {
                    setError({ active: true, type: 404 });
                } else if (err) {
                    setError({ active: true, type: err });
                    console.log("err", err);
                }

                if (stats) {
                    setLangData(stats);
                }
            });
            setLoading(false);
        };
        getLangData();
    }, [username]);

    return [langData, loading, error];
};

export const useUserRepos = (username) => {
    const [repoData, setRepoData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});

    useEffect(() => {
        const getUserRepos = async () => {
            setLoading(true);
            setError({ active: false, type: 200 });
            try {
                const findTotalRepo = await github.get(`/users/${username}`);
                const totalRepo = findTotalRepo.data.public_repos;
                let totalRequest = 1;
                // Reset Repo data to [] after rerendering
                setRepoData([]);

                // To get more than 100 repo find number of requests needed to make
                if (totalRepo > 0) {
                    totalRequest = Math.ceil(totalRepo / 100);
                }

                // Get 100 repo in each request and add them to the old array
                for (let i = 1; i < totalRequest + 1; i++) {
                    let response = await github.get(
                        `/users/${username}/repos?per_page=100&page=${i}&sort=created:dsc`
                    );
                    setRepoData((oldArray) => [...oldArray, ...response.data]);
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
        getUserRepos();
    }, [username]);

    return [repoData, loading, error];
};

export const useActivityData = (username) => {
    const [activityData, setActivityData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});

    useEffect(() => {
        const getActivityData = async () => {
            setLoading(true);
            setError({ active: false, type: 200 });
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
        getActivityData();
    }, [username]);

    return [activityData, loading, error];
};

// export const useRateLimit = (username) => {
//     const [rateLimit, setRateLimit] = useState(null);
//     useEffect(() => {
//         const getRateLimit = async () => {
//             const response = await github.get(
//                 "https://api.github.com/rate_limit"
//             );
//             setRateLimit(response.data.rate);
//             console.log(response.data.rate);
//         };
//         getRateLimit();
//     }, [username]);
// };
