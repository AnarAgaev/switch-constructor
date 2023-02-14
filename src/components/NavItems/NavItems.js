import Borders from '../Borders';
import Devices from '../Devices';
import Backgrounds from '../Backgrounds';
import Compositions from '../Compositions';

const NavItems = () => {
  return(
    <div className="constructor__drops custom-scroll-vertical">
      <Borders />
      <Devices />
      <Backgrounds />
      <Compositions />
    </div>
  );
}

export default NavItems;