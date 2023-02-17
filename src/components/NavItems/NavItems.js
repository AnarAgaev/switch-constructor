import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initData } from '../../Redux/dataSlice';
import Borders from '../../Containers/Borders';
import Backgrounds from '../../Containers/Backgrounds';
import Devices from '../../Containers/Devices';
import Preloader from '../Preloader/Preloader';

const NavItems = ({activeTab}) => {
  
  const dispatch = useDispatch();

  const data = useSelector((state) => state.data);

  const isActive = {
    borders: activeTab === 'borders',
    devices: activeTab === 'devices',
    backgrouns: activeTab === 'backgrouns',
    compositions: activeTab === 'compositions',
  }

  const isLoaded = data.borders 
    || data.devices 
    || data.backgrouns;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('constructor-data.json');
      const data = await response.json();
      dispatch(initData(data));
    }
    fetchData().catch((error) => console.log(error));    
  },[dispatch]);

  return(
    <div className="constructor__drops custom-scroll-vertical">
      {
        isLoaded.length === 0
          ? <Preloader />
          : <>
              <Borders isActive={isActive.borders} 
                arrBorders={data.borders} />

              <Devices isActive={isActive.devices}
                arrDevices={data.devices} />

              <Backgrounds isActive={isActive.backgrouns} 
                arrBackgrounds={data.backgrounds} />
            </>
      }
    </div>
  );
}

export default NavItems;