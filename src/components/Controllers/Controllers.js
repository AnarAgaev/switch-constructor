import NavTabs from "../NavTabs/";
import NavItems from "../NavItems/";

const Controllers = () => {
  return(
    <div className="col-12 col-md-6 col_controllers">
      <div className="constructor__controllers">
        <NavTabs />
        <NavItems />        
      </div>
    </div>
  );
}

export default Controllers;