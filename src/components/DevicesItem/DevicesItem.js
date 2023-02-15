const DevicesItem = ({item}) => {
  const {id, active, type, collection, 
    name, code, price, image, preview } = item;

  const clazz = active
    ? 'constructor__item active'
    : 'constructor__item';

  return(
    <div className={clazz}>
      <p>
        <img src={`/images/devices/previews/${preview}`} 
          alt={`${type} - ${name}`} />
      </p>
      <h4>{name}</h4>
    </div>
  );
}

export default DevicesItem;
