import { useSelector } from "react-redux";
import Views from "../Components/Views";
import PlaceholderImg from "../Components/PlaceholderImg";

const OrderView = () => {
  const order = useSelector((state) => state.order);

  const hasOrderData = order.background.image
    || order.border.image 
    || order.device.image;

  return(
    <div className="constructor__column constructor__column_views">
      <div className="constructor__view">
        {
          !hasOrderData 
            ? <PlaceholderImg /> 
            : <Views order={order} />
        }
      </div>
    </div>    
  );
}

export default OrderView;