const DevicesItem = ({item, handleClick}) => {
  const {active, type, name, preview } = item;

  const clazz = active
    ? 'constructor__item active'
    : 'constructor__item';

  return(
    <div className={clazz} onClick={handleClick}>
      <p>
        <img src={`images/devices/previews/${preview}`} 
          alt={`${type} - ${name}`} />
      </p>
      <h4>{name}</h4>
    </div>
  );
}

export default DevicesItem;
