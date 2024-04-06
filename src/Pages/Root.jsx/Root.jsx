import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navber";


const Root = () => {
    return (
        <div className="mx-auto container"  >
             <Navbar  ></Navbar> 
             <Outlet ></Outlet>    
        </div>
    );
};

export default Root;