import { useCallback, useState } from "react";
import { request } from "umi";


export default function useAuthModel() {
    const [user, setUser] = useState<string | null>()

    const signin = useCallback(async () => {
        const rst = await request('/api/signin', {method: 'POST'})
        console.log(rst)
        if (rst) {
            setUser(rst.name)
        }
    }, [])

    const signout = useCallback( () => {
        setUser(null)
    }, [])

    return {
        user, signin, signout
    }
}