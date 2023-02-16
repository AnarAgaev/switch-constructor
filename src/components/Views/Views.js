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
        <div>
          <h3>Рамка:</h3>
          <p id="constructorSignTitle">{border.collection} {border.name}</p>
        </div>

        <div>
          <h3>Механизм:</h3>
          <p id="constructorSignDescription">{device.name}</p>
        </div>
      </div>
    </>
  );
}

export default Views;