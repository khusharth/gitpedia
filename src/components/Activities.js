import React from "react";
import styled from "styled-components";
import {
    GoTrashcan,
    GoRepoForked,
    GoRepoPull,
    GoComment,
    GoGitBranch,
    GoPlus,
    GoRepoPush,
    GoStar,
    GoBook,
    GoIssueClosed,
    GoIssueOpened,
} from "react-icons/go";

const ActivitiesContainer = styled.div`
    margin: 3rem auto;
    width: 100rem;

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

    @media only screen and (max-width: 1000px) {
        width: 100%;
    }
`;

const ActivitiesItem = styled.div`
    padding: 2rem 4rem;
    margin-bottom: 2rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    border-radius: 5px;
    box-shadow: 0 1rem 2rem -0.6rem rgba(0,0,0, .2);
    justify-content: space-between;
    background-color: ${p => p.theme.cardColor};
`;

const ActivityDiv = styled.div`
    width: 75%;

    & svg {
        vertical-align: middle;
        margin-bottom: 4px;
        margin-right: 5px;
    }

    @media only screen and (max-width: 600px) {
        width: 100%;
    }
`;

const TimeDiv = styled.div`
    width: 25%;
    display: flex;
    justify-content: flex-end;
    @media only screen and (max-width: 600px) {
        justify-content: flex-start;
        margin-top: 1rem;
        width: 100%;
    }
`;

const FlexContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Activities = ({ activityData }) => {
    const extractActivity = () => {
        const message = activityData.map((activity) => {
            let icon = "";
            let action = "";
            let actionPerformed; // For Pull req
            let repoName = activity.repo.name;
            let time = new Date(activity.created_at)
                .toDateString()
                .split(" ")
                .slice(1)
                .join(" ");

            switch (activity.type) {
                case "CommitCommentEvent":
                    break;

                case "CreateEvent":
                    if (activity.payload.ref_type === "branch") {
                        icon = <GoGitBranch />;
                        action = `Created a branch ${activity.payload.ref} in `;
                    } else {
                        icon = <GoPlus />;
                        action = `Created a ${activity.payload.ref_type} in `;
                    }
                    break;

                case "DeleteEvent":
                    icon = <GoTrashcan />;
                    action = `Deleted a ${activity.payload.ref_type} ${activity.payload.ref} from `;
                    break;

                case "ForkEvent":
                    icon = <GoRepoForked />;
                    action = `Forked a repository ${repoName} to `;
                    repoName = activity.payload.forkee.full_name;
                    break;

                case "IssueCommentEvent":
                    icon = <GoComment />;
                    actionPerformed =
                        activity.payload.action.charAt(0).toUpperCase() +
                        activity.payload.action.slice(1);

                    action = `${actionPerformed} a comment on an issue in `;
                    break;

                case "IssuesEvent":
                    if (activity.payload.action === "closed") {
                        icon = <GoIssueClosed />;
                    } else {
                        icon = <GoIssueOpened />;
                    }
                    actionPerformed =
                        activity.payload.action.charAt(0).toUpperCase() +
                        activity.payload.action.slice(1);

                    action = `${actionPerformed} an issue in `;
                    break;

                case "PullRequestEvent":
                    if (activity.payload.action === "closed") {
                        icon = <GoTrashcan />;
                    } else {
                        icon = <GoRepoPull />;
                    }

                    actionPerformed =
                        activity.payload.action.charAt(0).toUpperCase() +
                        activity.payload.action.slice(1);

                    action = `${actionPerformed} a pull request in `;
                    break;

                case "PullRequestReviewCommentEvent":
                    icon = <GoComment />;
                    actionPerformed =
                        activity.payload.action.charAt(0).toUpperCase() +
                        activity.payload.action.slice(1);

                    action = `${actionPerformed} a comment on their pull request in `;
                    break;

                case "PushEvent":
                    icon = <GoRepoPush />;
                    let commit = "commit";
                    let branch = activity.payload.ref.slice(11);

                    if (activity.payload.size > 1) {
                        commit = "commits";
                    }

                    action = `Pushed ${activity.payload.size} ${commit} to ${branch} in `;
                    break;

                case "WatchEvent":
                    icon = <GoStar />;
                    action = "Starred the repository ";
                    break;

                case "ReleaseEvent":
                    icon = <GoBook />;
                    actionPerformed =
                        activity.payload.action.charAt(0).toUpperCase() +
                        activity.payload.action.slice(1);

                    action = `${actionPerformed} a release in `;
                    break;

                default:
                    action = "";
            }
            return { icon, action, repoName, time };
        });

        return message;
    };

    const buildActivityList = () => {
        const messages = extractActivity();

        if (messages.length !== 0) {
            return messages.map((message) => (
                <li>
                    <ActivitiesItem>
                        <ActivityDiv>
                            <span>
                                {message.icon} {message.action}
                            </span>
                            <a href={`https://github.com/${message.repoName}`}>
                                {message.repoName}
                            </a>
                        </ActivityDiv>
                        <TimeDiv>{message.time}</TimeDiv>
                    </ActivitiesItem>
                </li>
            ));
        } else {
            return (
                <li>
                    <ActivitiesItem>
                        <FlexContainer>
                            No recent activities found :(
                        </FlexContainer>
                    </ActivitiesItem>
                </li>
            );
        }

    };

    return (
        <>
            <ActivitiesContainer>
                <ul>{buildActivityList()}</ul>
            </ActivitiesContainer>
        </>
    );
};

export default Activities;
