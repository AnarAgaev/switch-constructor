const BordersItem = ({item, handleClick}) => {
  
  const {active, collection, name, image } = item;

  const clazz = active
    ? 'constructor__item active'
    : 'constructor__item';

  return(
    <div className={clazz} onClick={handleClick}>
      <p>
        <img src={`images/borders/${image}`} 
          alt={`${collection} - ${name}`} />
      </p>
      <h4>
        {collection}
        <span>{name}</span>
      </h4>
    </div>
  );
}

export default BordersItem;
