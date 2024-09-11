// home.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';

import Home from '../Home';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ message: 'Hello, World!' }),
  }),
) as jest.Mock;

describe('Home Component', () => {
  it('renders the message from API', async () => {
    render(<Home />);
    await waitFor(() =>
      expect(
        screen.getByText('Message from API: Hello, World!'),
      ).toBeInTheDocument(),
    );
  });
});
