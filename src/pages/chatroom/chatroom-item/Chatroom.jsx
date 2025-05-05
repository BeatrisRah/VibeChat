import { Link } from "react-router";


export default function Chatroom({data}) {

    return (
    <div className="card bg-white shadow-lg hover:shadow-2xl transition-all duration-300 p-6">
        <div className="card-body">
        <div className="flex items-center gap-5">
            <img 
            src={data?.imageURL} 
            alt={data?.title} 
            className="w-20 h-20 rounded-full mb-4 object-cover" 
            />
            <div>
            <h3 className="text-2xl font-semibold text-secondary capitalize">{data?.title}</h3>
            <p className="text-gray-500">{data.description}</p>
            </div>
        </div>
        <div className="flex items-center justify-between mt-4">
            <span className="text-gray-600 text-sm">🔹 {data?.members.length} members</span>
            <Link to={`/chatrooms/${data._id}/join`} className="btn btn-secondary bg-secondary hover:bg-pink-700 text-white">Join</Link>
        </div>
        </div>
        </div>
   );
}