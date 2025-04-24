import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { toast } from "react-toastify";

export default function UserGuard() {
    const userToken = useSelector(state => state.user.data?.token)

    if (!userToken) {
        toast.warn('You must login to do that!')
        return <Navigate to={'/login'} />
    }
    return <Outlet />
}