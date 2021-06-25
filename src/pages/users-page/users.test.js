import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import rootStore from '../../redux/store';
import { TEST_IDS } from '../../utils/testIds';
import Users from './users-page';

describe('users component test', () => {
  it('should render users with title', () => {
    render(
      <Provider store={rootStore}>
        <Users />
      </Provider>
    );
    const title = screen.getByTestId(TEST_IDS.users.title);
    expect(title).toHaveTextContent('Users');
  });
});
