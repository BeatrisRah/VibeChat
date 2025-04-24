import { useEffect } from "react";
import { useSelector } from "react-redux";
import {  Outlet, useNavigate } from "react-router";
import { toast } from "react-toastify";

export default function UserGuard() {
    const userToken = useSelector(state => state.user.data?.token)
    const navigate = useNavigate()

    useEffect(() => {
        if (!userToken) {
            toast.warn('You must login to do that!');
            navigate('/login', { replace: true });
        }
    }, [userToken, navigate])

    if (!userToken)  return null;
    return <Outlet />
}