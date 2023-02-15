import Borders from '../../containers/Borders';
import Backgrounds from '../../containers/Backgrounds';
import Devices from '../../containers/Devices';

import state from '../../data';

console.log(state);

const NavItems = ({activeTab}) => {
  const isActive = {
    borders: activeTab === 'borders',
    devices: activeTab === 'devices',
    backgrouns: activeTab === 'backgrouns',
    compositions: activeTab === 'compositions',
  }

  return(
    <div className="constructor__drops custom-scroll-vertical">
      <Borders isActive={isActive.borders} 
        arrBorders={state.borders} />

      <Devices isActive={isActive.devices}
        arrDevices={state.devices} />

      <Backgrounds isActive={isActive.backgrouns} 
        arrBackgrounds={state.backgrounds} />
    </div>
  );
}

export default NavItems;