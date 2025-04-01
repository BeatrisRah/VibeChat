export default function Navigation() {
   return (
      <div className="navbar fixed top-0 left-0 w-full px-4" 
         style={{
         backgroundColor: "rgba(17, 24, 39, 0)", 
         backdropFilter: "blur(10px)",
      }}>
         <div className="flex-1">
            <a className="btn btn-ghost text-xl">VibeChat</a>
         </div>
         <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
               <li><a>Home</a></li>
               <li><a>About</a></li>
               <li>
                  <details>
                     <summary>More</summary>
                     <ul className="bg-base-100 bg-opacity-80 rounded-t-none p-2">
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