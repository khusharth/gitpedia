import axios from "axios";

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

// A pre configured instace of axios for github API 
export default axios.create({
    baseURL: "https://api.github.com",
    auth: {
        username: `${githubClientId}`,
        password: `${githubClientSecret}`,
    },
});
