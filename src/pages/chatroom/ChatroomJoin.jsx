import { useQuery } from "@tanstack/react-query";
import { Link, Navigate, useNavigate, useParams } from "react-router";
import chatroomApi from "../../api/chatroomApi";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useEffect } from "react";
import Loading from "daisyui/components/loading";

export default function ChatroomJoin() {
    const {chatroomId} = useParams()
    const navigate = useNavigate()
    const userToken = useSelector(state => state.user.data.token)

    const {isSuccess, error} = useQuery({
        queryKey: ['chatroomJoin'],
        queryFn: () => chatroomApi.join(chatroomId, userToken),
        retry: false
    
    })
    
    useEffect(() => {
        
        if(!error) return        
        toast.error(error.message)
        setTimeout(() => {  
            navigate('/chatrooms')
        }, 500)
    }, [error])



    if(isSuccess){
        return <Navigate to={`/chatroom/${chatroomId}`} />
    }

    return(
        <div className="flex items-center justify-center min-h-screen bg-base-200">
        <div className="bg-base-100 p-6 rounded-2xl shadow-xl w-full max-w-sm text-center space-y-4">
            <div className="flex flex-col items-center justify-center space-y-2">
            <span className="loading loading-spinner loading-md"></span>
            <h2 className="text-lg font-semibold">Joining chatroom...</h2>
            
            </div>
            {/* {onCancel && (
            <Button variant="outline" onClick={onCancel} className="w-full">
                Cancel
            </Button>
            )} */}
        </div>
    </div>
    )
}