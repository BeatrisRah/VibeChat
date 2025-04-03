import { Link } from "react-router";

export default function Navigation() {
   return (
      <div className="navbar fixed top-0 left-0 w-full p-4 z-[100]" 
         style={{
         backgroundColor: "rgba(17, 24, 39, 0)", 
         backdropFilter: "blur(10px)",
      }}>
         <div className="flex-1">
            <Link to='/' className="btn btn-ghost text-xl">VibeChat</Link>
         </div>
         <div className="flex-none">
            <ul className="menu menu-horizontal px-1 flex items-baseline">
               <li><Link to='/login' >Log in</Link></li>
               <li><Link to='/chatrooms' >Chatrooms</Link></li>

               <li>
                  <div className="drawer">
                     <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                     <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className="btn btn-secondary drawer-button">Menu</label>
                     </div>
                     <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 m-0">
                           {/* User chatrooms and joined ones */}
                           <li><a>Sidebar Item 1</a></li>
                           <li><a>Sidebar Item 2</a></li>
                        </ul>
                     </div>
                  </div>
               </li>
            </ul>
         </div>
      </div>
   );
}