import { useSelector, useDispatch } from 'react-redux';
import { setBackground } from '../Redux/orderSlice';
import { activeBackground } from '../Redux/dataSlice';
import BackgroundsItem from '../Components/BackgroundsItem';

const handleClick = (dispatch, backgrounds, id) => {
  const background = backgrounds
    .filter(background => background.id === id);

  if (background.length) {
    dispatch(setBackground(background[0]));
    dispatch(activeBackground({id}));
  }
}

const Backgrounds = ({isActive, arrBackgrounds}) => {

  const backgrounds = useSelector((state) => state.data.backgrounds);
  const dispatch = useDispatch();

  const items = arrBackgrounds.map((item) => <BackgroundsItem key={item.id} item={item} 
    handleClick={() => handleClick(dispatch, backgrounds, item.id)} />);

  const clazz = isActive 
    ? 'constructor__content constructor__content_background active' 
    : 'constructor__content constructor__content_background';

  return(
    <div className={clazz}>
      <div className="constructor__section">
        {items}
      </div>
    </div>
  );
}

export default Backgrounds;
