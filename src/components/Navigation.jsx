import { Link } from "react-router";

export default function Navigation() {
   return (
      <div className="navbar fixed top-0 left-0 w-full p-4" 
         style={{
         backgroundColor: "rgba(17, 24, 39, 0)", 
         backdropFilter: "blur(10px)",
      }}>
         <div className="flex-1">
            <Link to='/' className="btn btn-ghost text-xl">VibeChat</Link>
         </div>
         <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
               <li><Link to='/login' >Log in</Link></li>
               <li><Link to='/chatrooms' >Chatrooms</Link></li>

               <li>
                  <details>
                     <summary>More</summary>
                     <ul className="rounded-t-none p-2" style={{
                        backgroundColor: "rgba(17, 24, 39, 0)", 
                        backdropFilter: "blur(10px)"}} >
                        <li><a>Contact</a></li>
                        <li><a>Help</a></li>
                     </ul>
                  </details>
               </li>
            </ul>
         </div>
      </div>
   );
}