import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initData } from '../../Redux/dataSlice';
import Borders from '../../Containers/Borders';
import Backgrounds from '../../Containers/Backgrounds';
import Devices from '../../Containers/Devices';

const NavItems = ({activeTab}) => {
  
  const dispatch = useDispatch();

  const data = useSelector((state) => state.data);

  const isActive = {
    borders: activeTab === 'borders',
    devices: activeTab === 'devices',
    backgrouns: activeTab === 'backgrouns',
    compositions: activeTab === 'compositions',
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://anaragaev.github.io/constructor/constructor-data.json');
      const data = await response.json();
      dispatch(initData(data));
    }
    fetchData().catch((error) => console.log(error));    
  },[]);  

  return(
    <div className="constructor__drops custom-scroll-vertical">
      <Borders isActive={isActive.borders} 
        arrBorders={data.borders} />

      <Devices isActive={isActive.devices}
        arrDevices={data.devices} />

      <Backgrounds isActive={isActive.backgrouns} 
        arrBackgrounds={data.backgrounds} />
    </div>
  );
}

export default NavItems;