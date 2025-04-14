import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

export default function UserGuard() {
    const userToken = useSelector(state => state.user.data.token)

    if (!userToken) return <Navigate to={'/404'} />
    return <Outlet />
}