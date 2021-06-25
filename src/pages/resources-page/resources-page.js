import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getResourcesActionAsync } from '../../redux/actions/resources-actions';
import { resourcesSelector } from '../../redux/selectors';
import { ROBO_URL } from '../../utils/constants';

function Resources() {
  const dispatch = useDispatch();
  const { data: resourcesList = [] } = useSelector(resourcesSelector);

  useEffect(() => {
    dispatch(getResourcesActionAsync());
  }, [dispatch]);

  return (
    <div>
      <h1 className="mb-3">Resources</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {resourcesList.map((item, index) => {
          return (
            <div
              className="card m-3 bg-info"
              style={{ width: '18rem', border: `5px solid ${item.color}` }}
              key={index}>
              <img
                src={ROBO_URL + item.name}
                className="card-img-top"
                alt={item.name}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.year}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Resources;
