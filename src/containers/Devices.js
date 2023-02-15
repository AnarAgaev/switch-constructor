import decompositionArrItems from "../helpers/decompositionArrItems";
import DevicesItem from "../components/DevicesItem";
import DevicesList from "../components/DevicesList";

const Devices = ({isActive, arrDevices}) => {

  let fragments = decompositionArrItems(arrDevices);
  let devicesLists = []; 

  for (const key in fragments) {
    const items = fragments[key]
      .map(item => <DevicesItem key={item.id} item={item} />);
      
    devicesLists.push(<DevicesList key={key} title={key} items={items}/>);
  }

  const clazz = isActive 
    ? 'constructor__content active' 
    : 'constructor__content';

  return(
    <div className={clazz}>
      {devicesLists}
    </div>
  );
}

export default Devices;
