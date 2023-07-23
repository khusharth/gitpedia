/* eslint-disable no-undef */
import axios from 'axios';

export const BASE_URL = 'https://api.github.com';

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
  // Local Environment Variables from .env.local
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  // Netlify Environment Variables
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

// A pre configured instace of axios for github API
export default axios.create({
  baseURL: BASE_URL,
  auth: {
    username: githubClientId,
    password: githubClientSecret
  }
});
