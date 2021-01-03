import React from "react";
import styled from "styled-components";
import {
    Header,
    Profile,
    MaterialTabs,
    Stats,
    Timeline,
    Activities,
    Footer,
    Loader,
    Error,
} from "../components";
import {
    useGithubUserData,
    useLangData,
    useUserRepos,
    useActivityData,
} from "../api/githubAPI";
import LanguageContext from "../contexts/LanguageContext";

const TabSection = styled.section`
    padding: 2rem 6rem;
    @media only screen and (max-width: 900px) {
        padding: 1.5rem 2rem;
    }
`;

const UserProfile = (props) => {
    const username = props.match.params.id;

    const [langData, langLoading, langError] = useLangData(username);
    const [userData, userLoading, userError] = useGithubUserData(username);
    const [repoData, repoLoading, repoError] = useUserRepos(username);
    const [activityData, activityLoading, activityError] = useActivityData(
        username
    );

    const loading =
        userLoading || langLoading || repoLoading || activityLoading;

    const error =
        userError &&
        userError.active &&
        langError &&
        langError.active &&
        repoError &&
        repoError.active &&
        activityError &&
        activityError.active;

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
                    {error ? (
                        <Error
                            error={
                                userError ||
                                langError ||
                                repoError ||
                                activityError
                            }
                        />
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
                                        <Activities
                                            activityData={activityData}
                                        />
                                    }
                                />
                            </TabSection>
                        </LanguageContext.Provider>
                    )}
                </main>
                <Footer />
            </>
        );
    }
};

export default UserProfile;
