import { render, screen } from '@testing-library/react';
import { TEST_IDS } from '../../utils/testIds';
import HomePage from './home-page';

describe('Home component test', () => {
  it('should render a tag with specific attributes', () => {
    render(<HomePage />);
    const href = screen.getByTestId(TEST_IDS.home.href);
    expect(href).toHaveProperty('href');
    expect(href).toHaveProperty('target');
  });
});
