import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersActionAsync } from '../../redux/actions/users-actions';
import { usersSelector } from '../../redux/selectors/users-selector';

function Users() {
  const dispatch = useDispatch();
  const { data: usersList = [] } = useSelector(usersSelector);

  useEffect(() => {
    dispatch(getUsersActionAsync());
  }, [dispatch]);

  return (
    <div>
      <h1 className="mb-3">Users</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {usersList.map((item, index) => {
          return (
            <div className="card m-3 bg-info" style={{ width: '18rem' }} key={index}>
              <img
                src={item.avatar}
                className="card-img-top"
                alt={item.first_name}
              />
              <div className="card-body">
                <h5 className="card-title">{item.first_name}</h5>
                <p className="card-text">{item.email}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Users;
