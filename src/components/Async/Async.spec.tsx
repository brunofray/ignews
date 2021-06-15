import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { Async } from '.';

test('it renders correctly', async () => {
  render(<Async />)

  expect(screen.getByText('Hello World')).toBeInTheDocument();
  // expect(await screen.findByText('Button')).toBeInTheDocument();

  // quando a lógica é contrária, o botão começa na tela e depois some
  // await waitForElementToBeRemoved(screen.queryByText('Button'));

  // await waitFor(() => {
  //   return expect(screen.getByText('Hello World')).toBeInTheDocument();
  // })
});