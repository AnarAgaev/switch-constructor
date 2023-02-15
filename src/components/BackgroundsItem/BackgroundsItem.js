const BackgroundsItem = ({item}) => {
  const {id, active, image} = item;

  const clazz = active
    ? 'constructor__item active'
    : 'constructor__item';

  return(
    <div className={clazz}>
      <p><img src={`/images/backgrounds/${image}`} alt='' /></p>
    </div>
  );
}

export default BackgroundsItem;