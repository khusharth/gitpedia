import { calculateTotalStars } from '../utils';
import { RepoData } from '../../../types';
import { mockRepoData } from '../../../mock.data';

describe('calculateTotalStars', () => {
  test('should return the correct total stars of non-forked repositories', () => {
    // Sample data for the repoData array with both forked and non-forked repositories
    const repoData = [
      { ...mockRepoData, name: 'repo1', fork: false, stargazers_count: 10 },
      { ...mockRepoData, name: 'repo2', fork: true, stargazers_count: 5 },
      { ...mockRepoData, name: 'repo3', fork: false, stargazers_count: 15 }
    ];

    // Call getTotalStars with the sample repoData
    const totalStars = calculateTotalStars(repoData);

    // Verify that the totalStars is calculated correctly
    expect(totalStars).toBe(25);
  });

  test('should return 0 when all repos are forked repositories', () => {
    const repoData = [
      { ...mockRepoData, name: 'repo1', fork: true, stargazers_count: 10 },
      { ...mockRepoData, name: 'repo2', fork: true, stargazers_count: 5 },
      { ...mockRepoData, name: 'repo3', fork: true, stargazers_count: 15 }
    ];

    // Call getTotalStars with the empty repoData
    const totalStars = calculateTotalStars(repoData);

    // Verify that the totalStars is 0
    expect(totalStars).toBe(0);
  });

  test('should return 0 when there are no repos', () => {
    // Sample data for an empty repoData array
    const repoData: RepoData = [];

    // Call getTotalStars with the empty repoData
    const totalStars = calculateTotalStars(repoData);

    // Verify that the totalStars is 0
    expect(totalStars).toBe(0);
  });

  it('should handle missing stargazers_count property', () => {
    // Sample data with missing stargazers_count property in one of the repos
    const repoData = [
      { ...mockRepoData, name: 'repo1', fork: false, stargazers_count: 10 },
      { ...mockRepoData, name: 'repo2', fork: true, stargazers_count: 5 },
      { ...mockRepoData, name: 'repo3', fork: false, stargazers_count: undefined }
    ];

    // Call getTotalStars with the sample repoData
    const totalStars = calculateTotalStars(repoData);

    // Verify that the missing stargazers_count property is handled gracefully (ignored in the calculation)
    expect(totalStars).toBe(10);
  });
});
