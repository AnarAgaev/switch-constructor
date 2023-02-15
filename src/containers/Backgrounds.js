import BackgroundsItem from '../components/BackgroundsItem';

const Backgrounds = ({isActive, arrBackgrounds}) => {
  const items = arrBackgrounds.map((item) => <BackgroundsItem 
    key={item.id} item={item} />);

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
