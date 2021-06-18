import { useContext } from 'react';
import { CustomRobotsContext } from '../../../contexts/CustomRobotsProvider';
import { ROBO_URL } from '../../../utils/constants';

function CustomRobotsListItem({ item }) {
  const { removeCustomRobot } = useContext(CustomRobotsContext);

  const onClick = () => {
    removeCustomRobot(item.id);
  };

  return (
    <div className="card custom-robots-list-item text-white bg-primary">
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <img src={ROBO_URL + item.title} width="100" />

        <button className="btn btn-danger" onClick={onClick}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CustomRobotsListItem;
