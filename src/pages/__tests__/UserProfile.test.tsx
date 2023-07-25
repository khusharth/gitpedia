import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserProfile from '../UserProfile';
import ThemeProviderWrapper from '../../contexts/ThemeProvider';

import { mockUserData } from 'src/mock.data';

test('render the expected user profile when user searches a user from the user profile page', async () => {
  const userName = 'khusharth';

  window.history.pushState({ id: 'hello' }, '', `/user/${userName}`);

  render(
    <ThemeProviderWrapper>
      <Router>
        <Route path="/user/:id" component={UserProfile} />
      </Router>
    </ThemeProviderWrapper>
  );

  // verify intro card data
  await screen.findByLabelText(/github profile/i);
  await screen.findByText(mockUserData.name);

  // verify stats card is shown
  await screen.findByText(/Joined github on/);
  // had to create a regex as there is spacing in between
  const regexPattern = `created ${mockUserData.public_repos} projects`;
  await screen.findByText(new RegExp(regexPattern));

  // stats tab is visible and active
  const activeTab = await screen.findByRole('tab', { selected: true });
  expect(activeTab).toHaveTextContent('Stats');

  await screen.findByText(/Repositories/);
  await screen.findByText(/Total Stars/);

  // click on Timeline tab
  const tab2 = await screen.getByRole('tab', { name: 'Timeline' });
  user.click(tab2);
  expect(screen.getByRole('tab', { selected: true })).toHaveTextContent('Timeline');
});
