import { NavLink, Outlet } from "react-router-dom";
import useTansack from "../../Hooks/useTansack";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const [slot] = useTansack()
const [isAdmin ]= useAdmin();
    return (
        <div className=" grid grid-cols-2">
            {/* nav */}
            <div className="drawer drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">menu</label> */}
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
          {isAdmin ? <>
           <li><NavLink to="/dashboard/adminDb">ADMIN PROFILE</NavLink></li> 
           <li><NavLink to="/dashboard/userlist">USER LIST</NavLink></li> 
           <li><NavLink to="/dashboard/manage">MANAGE ITEMS</NavLink></li> 
           <li><NavLink to="/dashboard/bookings">MANAGE BOOKINGS</NavLink></li> 
           <li><NavLink to="/dashboard/bannerup">MANAGE BANNER</NavLink></li> 
           <li><NavLink to="/dashboard/testlist">TEST LIST</NavLink></li> 
          <li><NavLink to={'/'}>HOME</NavLink></li>
          </>          :
          <>
           <li><NavLink to="/dashboard/userDb">MY PROFILE</NavLink></li> 
           <li><NavLink to="/dashboard/upcome">MY UPCOMING APPOINTMENT({slot.length}
)</NavLink></li> 
           <li><NavLink to="/dashboard/update">UPDATE PROFILE</NavLink></li> 
          <li><NavLink to={'/'}>HOME</NavLink></li>
          </>
          }

    
    </ul>
  
  </div>
</div>
{/* content */}
<div>
    <Outlet></Outlet>
</div>
        </div>
    );
};

export default Dashboard;