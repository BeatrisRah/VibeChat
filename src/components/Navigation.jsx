import { useQuery } from "@tanstack/react-query";
import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import authApi from "../api/authApi";
import { setChatrooms, resetUser } from "../redux/userSlice";

export default function Navigation() {
   const user = useSelector(state => state.user);
   const hasFetchedRef = useRef(false);
   const dispatch = useDispatch()
   const navigate = useNavigate()
   

   const { data, isPending, error, refetch} = useQuery({
      queryKey: ['usersRooms', user.data?.id],
      queryFn: () => authApi.getUsersChats(user.data.id),
      enabled: false,
   });

   //if drawer is open for the first time fetch
   const handleChange = (e) => {
      const isChecked = e.target.checked;
      
      if (isChecked && !hasFetchedRef.current) {
         hasFetchedRef.current = true;
         refetch(); 
      }
   };

   useEffect(() => {
      if(!data) return

      dispatch(setChatrooms({
         joinedChatrooms: data.joinedRooms,
         ownedChatrooms: data.ownedRooms
         }))
   }, [data])

   const onLogout = () => {
      dispatch(resetUser())
      return navigate('/')

   }

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

               {user.data ?
               <>
               <li>
                  <div className="drawer cursor-default">
                     <input id="my-drawer" type="checkbox" onChange={handleChange} className="drawer-toggle" />
                     <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className="btn btn-secondary drawer-button">Menu</label>
                     </div>
                     <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay !cursor-default"></label>
                        <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4 flex flex-col gap-4">
                           {isPending && <span className="loading loading-dots loading-sm"></span>}
                           {error && (
                              <div role="alert" className="alert alert-error alert-soft">
                                 <span>{error.message}</span>
                              </div>
                           )}

                           <h1 className="text-lg font-semibold text-center">{user?.data.username}</h1>
                           <div>
                                 <h3 className="text-lg font-semibold text-gray-500">Your Chatrooms</h3>
                                 <ul className="mt-2 space-y-2">
                                    {data?.ownedRooms.length > 0 ? (
                                       data?.ownedRooms.map(chat => <li key={chat._id}><Link to={`/chatrooms/${chat._id}`}>{chat.title}</Link></li>)
                                    ): (
                                       <p>No chatrooms... :(</p>
                                    )}
                                 </ul>
                           </div>

                           <div className="divider"></div> {/* DaisyUI Divider */}

                           {/* Joined Chatrooms */}
                           <div>
                                 <h3 className="text-lg font-semibold text-gray-500">Joined Chatrooms</h3>
                                 <ul className="mt-2 space-y-2">
                                    {data?.joinedRooms.length > 0 ? (
                                       data?.joinedRooms.map(chat => <li key={chat._id}><a>{chat.title}</a></li>)
                                    ): (
                                       <p>No chatrooms... :(</p>
                                    )}
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
               </li>
               <li><button onClick={onLogout} >Logout</button></li>
               </>: 
               <li><Link to='/login' >Log in</Link></li>}
            </ul>
         </div>
      </div>
   );
}