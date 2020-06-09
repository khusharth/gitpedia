import axios from "axios";

// A pre configured instace of axios for github API 
export default axios.create({
    baseURL: "https://api.github.com",
    auth: {
        username: `${process.env.REACT_APP_GITHUB_CLIENT_ID}`,
        password: `${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`,
    },
});
