import { rest } from 'msw';
import { BASE_URL } from 'src/api/base';
import { mockUserData, mockRepoList, mockActivityData } from 'src/mock.data';

export const handlers = [
  rest.get(`${BASE_URL}/users/:userId/events`, (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json(mockActivityData)
    );
  }),
  rest.get(`${BASE_URL}/users/:userId/repos`, (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json(mockRepoList)
    );
  }),
  rest.get(`${BASE_URL}/users/:userId`, (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({ ...mockUserData, login: req.params.userId })
    );
  })
];
