import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import rootStore from '../../redux/store';
import { TEST_IDS } from '../../utils/testIds';
import FakerRobots from './faker-robots';

describe('faker robots component test', () => {
  it('should render faker robots with title', () => {
    const mockTitle = 'testing';
    render(
      <Provider store={rootStore}>
        <FakerRobots title={mockTitle} />
      </Provider>
    );
    const title = screen.getByTestId(TEST_IDS.fakerRobots.title);
    expect(title).toHaveTextContent(mockTitle);
  });
});
