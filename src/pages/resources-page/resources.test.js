import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import rootStore from '../../redux/store';
import { TEST_IDS } from '../../utils/testIds';
import Resources from './resources-page';

describe('resources component test', () => {
  it('should render resources with title', () => {
    render(
      <Provider store={rootStore}>
        <Resources />
      </Provider>
    );
    const title = screen.getByTestId(TEST_IDS.resources.title);
    expect(title).toBeInTheDocument();
  });
});
