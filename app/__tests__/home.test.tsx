import { render, screen } from '@testing-library/react';
import React from 'react';

import Home from '../components/Home';

describe('Home Component', () => {
  it('renders the static message', () => {
    render(<Home />);
    expect(screen.getByText('Message: Hello, World!')).toBeInTheDocument();
  });
});
