import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const id = request.query.id;

  console.log(request.query);
  console.log(id);

  const users = [
    { id: 1, name: 'Bruno' },
    { id: 2, name: 'Ana' },
    { id: 3, name: 'Rafa' },
  ]

  return response.json(users);
}