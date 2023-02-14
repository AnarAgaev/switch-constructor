const Views = () => {
  return(
    <div className="col-12 col-md-6 col_view">
      <div className="constructor__view">
        <div className="constructor__pic">
          <div className="constructor__pic-background">
            <img src="https://anaragaev.github.io/images/constructor/background/bg-39.jpg" alt="" />
          </div>
          <div className="constructor__pic-border">
            <img src="https://anaragaev.github.io/images/constructor/border/4690389180675_werkel.png" alt="" />
          </div>
          <div className="constructor__pic-device">
            <img src="https://anaragaev.github.io/images/constructor/device/picture/mechanism_white_socket_sup.png"
              alt="" />
          </div>
        </div>
        <div className="constructor__sign">
          <div>
            <h3>Рамка:</h3>
            <p id="constructorSignTitle">Elite графит</p>
          </div>
          <div>
            <h3>Механизм:</h3>
            <p id="constructorSignDescription">Белый одноклавишный</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Views;