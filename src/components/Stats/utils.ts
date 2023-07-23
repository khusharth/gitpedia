import { RepoData } from '../../types';

const MAX_REPO_TO_SHOW_ON_GRAPH = 5;
const sortProperties = {
  STARGAZERS_COUNT: 'stargazers_count',
  SIZE: 'size'
} as const;

/**
 * returns total stars a user has from all their repos (excluding forks)
 */
const calculateTotalStars = (repoData: RepoData) => {
  const myRepos = repoData.filter((repo) => !repo.fork).map((repo) => repo.stargazers_count ?? 0);
  const totalStars = myRepos.reduce((a, b) => a + b, 0);

  return totalStars;
};

/**
 * gets stats (no. of stars) for the top 5 most starred repos of the user
 */
const calculateMostStarredRepos = (repoData: RepoData) => {
  const sortProperty = sortProperties.STARGAZERS_COUNT;

  const mostStarredRepos = repoData
    .filter((repo) => !repo.fork)
    .sort((a, b) => (b[sortProperty] ?? 0) - (a[sortProperty] ?? 0))
    .slice(0, MAX_REPO_TO_SHOW_ON_GRAPH);

  // Label and data needed for  displaying Charts
  const label = mostStarredRepos.map((repo) => repo.name);
  const data = mostStarredRepos.map((repo) => repo[sortProperty]);

  return { label, data };
};

/**
 * gets size for the top 5 largest repos by size of the user
 */
const calculateMaxSizeRepos = (repoData: RepoData) => {
  const sortProperty = sortProperties.SIZE;

  const mostStarredRepos = repoData
    .filter((repo) => !repo.fork)
    .sort((a, b) => b[sortProperty] - a[sortProperty])
    .slice(0, MAX_REPO_TO_SHOW_ON_GRAPH);

  const label = mostStarredRepos.map((repo) => repo.name);
  const data = mostStarredRepos.map((repo) => repo[sortProperty]);

  return { label, data };
};

export { calculateTotalStars, calculateMostStarredRepos, calculateMaxSizeRepos };
