import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { Form } from '../';

test('renders a input with a search cta to enter github username', () => {
  const userName = 'khusharth';

  render(
    <Router>
      <Form displaySpan />
    </Router>
  );

  const mockHistoryPushState = jest.spyOn(window.history, 'pushState');

  const input = screen.getByLabelText(/enter github username/i);
  const searchBtn = screen.getByLabelText(/search/i);

  user.type(input, userName);
  user.click(searchBtn);

  // async?
  expect(mockHistoryPushState).toBeCalledTimes(1);
  expect(window.location.href).toContain(`/user/${userName}`);
});
