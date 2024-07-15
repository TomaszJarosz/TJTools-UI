import React from 'react';
import { render } from '@testing-library/react';
import ToolsApp from './ToolsApp';

test('renders learn react link', () => {
  const { getByText } = render(<ToolsApp />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
