import React from "react";
import styled from "styled-components";
import {
    GoLocation,
    GoGlobe,
    GoMarkGithub,
    GoBriefcase,
    GoMail,
} from "react-icons/go";
import LanguageContext from "../contexts/LanguageContext";
import Button from "./Button";

const ProfileSection = styled.section`
    /* background-color: #000; */
    padding: 2rem 6rem;
    padding-bottom: 0rem;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 900px) {
        padding: 1.5rem 2rem;
    }
`;

const UserContainer = styled.div`
    /* background-color: #fff;
    margin-bottom: 2rem; */
    height: 100%;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 600px) {
        padding-top: 10rem;
    }
`;

const UserInfoDiv = styled.div`
    display: flex;
    justify-content: center;
    background-color: #fff;
    /* width: 100%; */
    padding: 4rem;
    border-radius: 5px;
    border: 1px solid #eee;
    box-shadow: 0 2rem 5rem #ccc;

    & ul li {
        font-size: 1.8rem;
        padding: 0.3rem 0;
    }

    & ul li h1 {
        font-size: 3rem;
        font-weight: 400;
    }

    & ul li:last-of-type {
        padding-top: 0.8rem;
    }

    & ul li a {
        text-decoration: none;
        &:link,
        &:visited {
            color: #0098f0;
        }

        &:hover,
        &:active {
            text-decoration: underline;
        }
    }

    @media only screen and (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        padding: 3rem 4rem;

        & ul li {
            text-align: center;
        }
    }

    @media only screen and (max-width: 500px) {
        width: 100%;
        padding: 3rem 2rem;
    }
`;

const ProfileImgDiv = styled.div`
    margin-right: 2.5rem;
    position: relative;
    height: 200px;
    width: 100px;
    @media only screen and (max-width: 600px) {
        margin-right: 0;
        margin-bottom: 2.5rem;
        width: 100%;
        height: 100px;
    }

    & img {
        position: absolute;
        top: 0;
        left: -10rem;
        vertical-align: middle;
        text-align: center;
        border-radius: 2px;
        /* box-shadow: 0 1.2rem 2rem #ccc; */

        @media only screen and (max-width: 600px) {
            top: -10rem;
            right: 0;
            left: 0;
            margin: 0 auto;
        }
    }
`;

const DetailList = styled.ul`
    margin-top: 3rem;
    border: 1px solid #eee;
    border-radius: 5px;
    background-color: #fff;
    padding: 2rem 4rem;
    box-shadow: 0 1.2rem 2rem #ccc;

    @media only screen and (max-width: 600px) {
        padding: 3rem 4rem;
    }

    @media only screen and (max-width: 500px) {
        width: 100%;
    }

    & ul li {
        text-align: center;
    }
`;
const FlexContainer = styled.div`
    display: flex;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
        justify-content: center;
    }
`;

const LocationDiv = styled.div`
    @media only screen and (max-width: 600px) {
        padding-top: 0.6rem;
    }
`;

const IconSpan = styled.span`
    color: #555;
    display: ${(p) => (p.available ? "inline" : "none")};
    margin-right: ${(p) => (p.company ? "1.5rem" : "0")};

    & svg {
        vertical-align: middle;
        margin-bottom: 4px;
    }

    & a button svg {
        margin-bottom: 0;
    }

    @media only screen and (max-width: 600px) {
        margin-right: 0;
    }
`;

const Profile = (props) => {
    const {
        avatar_url,
        email,
        html_url,
        login,
        company,
        location,
        blog,
        name,
        public_repos,
        created_at,
    } = props.userData;

    let website = blog;

    if (blog && blog.slice(1, 5) !== "http") {
        website = `http://${blog}`;
    }

    const date = new Date(created_at);
    const joinedDate = date.toDateString().split(" ").slice(1).join(" ");

    // console.log(props.userData);
    return (
        <ProfileSection>
            <UserContainer>
                <UserInfoDiv>
                    <ProfileImgDiv>
                        <img src={avatar_url} width='200px' alt='avatar' />
                    </ProfileImgDiv>
                    <ul>
                        <li>
                            <h1>{name}</h1>
                        </li>
                        <li>
                            <FlexContainer>
                                <div>
                                    {/* If available = true then only show the component */}
                                    <IconSpan available={company} company>
                                        <GoBriefcase /> {company}
                                    </IconSpan>
                                </div>
                                <LocationDiv>
                                    <IconSpan available={location}>
                                        <GoLocation /> {location}
                                    </IconSpan>
                                </LocationDiv>
                            </FlexContainer>
                        </li>
                        <li>
                            <IconSpan available={email}>
                                <GoMail /> {email}
                            </IconSpan>
                        </li>
                        <li>
                            <IconSpan available={website}>
                                <GoGlobe />{" "}
                                <a
                                    href={website}
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    {blog}
                                </a>
                            </IconSpan>
                        </li>
                        <li>
                            <IconSpan available={html_url}>
                                <a
                                    href={html_url}
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <Button>
                                        <GoMarkGithub /> @{login}
                                    </Button>
                                </a>
                            </IconSpan>
                        </li>
                    </ul>
                </UserInfoDiv>
                <DetailList>
                    <ul>
                        <li>Joined github on {joinedDate}</li>
                        <li>Since have created {public_repos} projects</li>
                        <LanguageContext.Consumer>
                            {(context) => {
                                const langCount = context.length;
                                return (
                                    <li>
                                        Using {langCount} different languages
                                    </li>
                                );
                            }}
                        </LanguageContext.Consumer>
                    </ul>
                </DetailList>
            </UserContainer>
        </ProfileSection>
    );
};

export default Profile;
