import {useEffect, useState} from "react";

const useAuth = () => {
    const [auth, setAuth] = useState(false)
    useEffect(() => {
        const token = localStorage.getItem('access_token');
        if (token) {
            setAuth(true
            )
        }
    }, []);

    return auth
}

export default useAuth;
