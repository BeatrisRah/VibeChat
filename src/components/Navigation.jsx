import { useSelector } from "react-redux";
import { Link } from "react-router";

export default function Navigation() {

   const user = useSelector(state => state.user)
   

   return (
      <div className="navbar fixed top-0 left-0 w-full p-4 z-[100]" 
         style={{
         backgroundColor: "rgba(17, 24, 39, 0)", 
         backdropFilter: "blur(10px)",
      }}>
         <div className="flex-1">
            <Link to='/' className="p-4 font-bold text-xl">VibeChat</Link>
         </div>
         <div className="flex-none">
            <ul className="menu menu-horizontal px-1 flex items-baseline">
               
               <li><Link to='/chatrooms' >Chatrooms</Link></li>

               {user.data.token ?
               <li>
                  <div className="drawer">
                     <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                     <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className="btn btn-secondary drawer-button">Menu</label>
                     </div>
                     <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4 flex flex-col gap-4">
                           {/* Created Chatrooms */}
                           <h1 className="text-lg font-semibold text-center">{user?.data.username}</h1>
                           <div>
                                 <h3 className="text-lg font-semibold text-gray-500">Your Chatrooms</h3>
                                 <ul className="mt-2 space-y-2">
                                    <li><a>🔥 My Music Room</a></li>
                                    <li><a>🎮 Gamers Hub</a></li>
                                 </ul>
                           </div>

                           <div className="divider"></div> {/* DaisyUI Divider */}

                           {/* Joined Chatrooms */}
                           <div>
                                 <h3 className="text-lg font-semibold text-gray-500">Joined Chatrooms</h3>
                                 <ul className="mt-2 space-y-2">
                                    <li><a>📚 Study Group</a></li>
                                    <li><a>🏀 Sports Talk</a></li>
                                 </ul>
                           </div>

                           <div className="divider"></div> {/* Another Divider */}

                           {/* Create Chatroom Button */}
                           <div className="mt-auto"> 
                                 <Link to='/chatrooms/create' className="btn btn-secondary w-full bg-secondary hover:bg-pink-700">
                                    + Create New Chatroom
                                 </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </li>: 
               <li><Link to='/login' >Log in</Link></li>}
            </ul>
         </div>
      </div>
   );
}