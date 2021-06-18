import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRoboActionAsync } from '../../redux/actions/robo-actions';
import { roboSelector } from '../../redux/selectors';
import { ROBO_URL } from '../../utils/constants';

function FakerRobots() {
  const dispatch = useDispatch();
  const { data: roboList = [] } = useSelector(roboSelector);

  useEffect(() => {
    dispatch(getRoboActionAsync(20));
  }, [dispatch]);

  return (
    <div>
      <h1>Robo list length {roboList.length}</h1>

      {roboList.map((item, index) => {
        return (
          <div className="card" key={index}>
            <h2>{item.title}</h2>
            <img src={ROBO_URL + item.title} width="100" />
          </div>
        );
      })}
    </div>
  );
}

export default FakerRobots;
