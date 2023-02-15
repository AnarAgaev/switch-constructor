import decompositionArrItems from "../helpers/decompositionArrItems";
import BordersList from "../components/BordersList"
import BordersItem from "../components/BordersItem";

const Borders = ({isActive, arrBorders}) => {
  
  let fragments = decompositionArrItems(arrBorders);
  let bordersLists = [];  

  for (const key in fragments) {
    const items = fragments[key]
      .map(item => <BordersItem key={item.id} item={item} />);
      
    bordersLists.push(<BordersList key={key} title={key} items={items}/>);
  }

  const clazz = isActive 
    ? 'constructor__content active' 
    : 'constructor__content';

  return(
    <div className={clazz}>
      {bordersLists}
    </div>
  );
}

export default Borders;