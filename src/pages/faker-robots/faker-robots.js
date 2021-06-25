import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRoboActionAsync } from '../../redux/actions/robo-actions';
import { roboSelector } from '../../redux/selectors';
import { ROBO_URL } from '../../utils/constants';
import { TEST_IDS } from '../../utils/testIds';

function FakerRobots({ title = 'Robo Users' }) {
  const dispatch = useDispatch();
  const { data: roboList = [] } = useSelector(roboSelector);

  useEffect(() => {
    dispatch(getRoboActionAsync(20));
  }, [dispatch]);

  return (
    <div>
      <h1 className="mb-3" data-testid={TEST_IDS.fakerRobots.title}>
        {title}
      </h1>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {roboList.map((item, index) => {
          return (
            <div className="card m-3 bg-info" style={{ width: '18rem' }} key={index}>
              <img
                src={ROBO_URL + item.username}
                className="card-img-top"
                alt={item.username}
              />
              <div className="card-body">
                <h5 className="card-title">{item.username}</h5>
                <p className="card-text">{item.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FakerRobots;
