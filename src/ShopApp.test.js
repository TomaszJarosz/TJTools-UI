import React from 'react';
import { render } from '@testing-library/react';
import ShopApp from './ShopApp';

test('renders learn react link', () => {
  const { getByText } = render(<ShopApp />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
