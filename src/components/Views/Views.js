const alertOrder = (order) => {
  alert(JSON.stringify(order, null, 4));
}

const Views = ({order}) => {
  const {background, border, device} = order;

  return(
    <>
      <div className="constructor__pic">
        {
          !background.image
            ? null
            : <div className="constructor__pic-background">
                <img src={`images/backgrounds/${background.image}`} alt="" />
              </div>
        }
        {
          !border.image
            ? null
            : <div className="constructor__pic-border">
                <img src={`images/borders/${border.image}`} alt="" />
              </div>
        }
        {
          !device.image
            ? null
            : <div className="constructor__pic-device">
                <img src={`images/devices/pictures/${device.image}`} alt="" />
              </div>
        }
      </div>

      <div className="constructor__sign">
        {
          Object.keys(border).length !== 0 
            ? <div>
                <h3>Рамка:</h3>
                <p>
                  Коллекция: <span>{border.collection}</span>&nbsp;
                  Название: <span>{border.name}</span>&nbsp; 
                  Артикул: <span>{border.code}</span>&nbsp; 
                  Цена: <span>{border.price} ₽</span> 
                </p>
              </div> 
            : null
        }
        {
          Object.keys(device).length !== 0 
            ? <div>
                <h3>Механизм:</h3>
                <p>
                  Коллекция: <span>{device.collection}</span>&nbsp;
                  Название: <span>{device.name}</span>&nbsp; 
                  Артикул: <span>{device.code}</span>&nbsp; 
                  Цена: <span>{device.price} ₽</span> 
                </p>
              </div> 
            : null
        }
        {
          Object.keys(border).length !== 0 
            && Object.keys(device).length !== 0
            ? <>
                <div>
                  <h3>Итого: </h3>
                  <p>{parseFloat(border.price) + parseFloat(device.price)} ₽</p>
                </div>
                <button onClick={() => alertOrder(order)}
                  className='constructor__button btn btn-success' 
                  type='button'>Добавить в корзину</button>
              </>
            : null
        }
      </div>
    </>
  );
}

export default Views;