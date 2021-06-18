import AddCustomRobotForm from '../../components/forms/add-custom-robot-form';
import CustomRobotsList from '../../components/list/custom-robots-list';
import CustomRobotsProviderComponent from '../../contexts';

function CustomRobots() {
  return (
    <CustomRobotsProviderComponent>
      <div className="row">
        <h2>Custom Robots page</h2>
        <div className="col-4">
          <AddCustomRobotForm />
        </div>

        <div className="col-8 d-flex flex-wrap">
          <CustomRobotsList />
        </div>
      </div>
    </CustomRobotsProviderComponent>
  );
}

export default CustomRobots;
