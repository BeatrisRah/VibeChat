import { useQuery } from "@tanstack/react-query";
import chatroomApi from "../../api/chatroomApi";
import Chatroom from "./chatroom-item/Chatroom";

export default function ChatroomSection() {
   const {data, isPending, error} = useQuery({
      queryKey:['chatrooms'],
      queryFn: chatroomApi.getAll
   })

   // TODO ADD ERROR PAGE
   if(error) return <h1>Something went wrong!: {error.message}</h1>

   return (
      <div className="bg-base-100 mt-20 min-h-screen py-12">
         <div className="container mx-auto px-6">
            {/* Page Header */}
            <div className="text-center mb-8">
               <h2 className="text-4xl font-bold text-secondary">Explore Chatrooms</h2>
               <p className="text-gray-600 mt-2">Join a chatroom and start vibing with others!</p>
            </div>
            {/* Search Bar */}
            {/* <div className="flex justify-center mb-8">
               <input type="text" placeholder="Search chatrooms..." className="input input-bordered w-full max-w-md text-gray-800" />
            </div> */}
            {/* Chatroom Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {isPending && <p>Loadaing...</p>}
               {data && data.map(c => <Chatroom key={c.id} data={c} />)}
               {/* Another Sample Chatroom */}
               <div className="card bg-white shadow-lg hover:shadow-2xl transition-all duration-300 p-6">
                  <div className="card-body">
                     <h3 className="text-2xl font-semibold text-purple-700">🎮 Gaming Hub</h3>
                     <p className="text-gray-500">For gamers to chat, find teammates, and discuss new releases.</p>
                     <div className="flex items-center justify-between mt-4">
                        <span className="text-gray-600 text-sm">🔹 250 members</span>
                        <button className="btn btn-primary bg-purple-700 hover:bg-purple-800 text-white">Join</button>
                     </div>
                  </div>
               </div>
               {/* Example Chatroom */}
               <div className="card bg-white shadow-lg hover:shadow-2xl transition-all duration-300 p-6">
                  <div className="card-body">
                     <h3 className="text-2xl font-semibold text-purple-700">💬 Casual Talk</h3>
                     <p className="text-gray-500">Talk about anything! No topic is off-limits (within reason 😉).</p>
                     <div className="flex items-center justify-between mt-4">
                        <span className="text-gray-600 text-sm">🔹 180 members</span>
                        <button className="btn btn-primary bg-purple-700 hover:bg-purple-800 text-white">Join</button>
                     </div>
                  </div>
               </div>
               {/* Add more chatrooms dynamically */}
            </div>
            {/* Load More Button */}
            <div className="mt-12 flex justify-center">
               <button className="btn btn-outline border-secondary text-secondary hover:bg-pink-500 hover:text-white">
                  Load More Chatrooms
               </button>
            </div>
         </div>
      </div>

   );
}