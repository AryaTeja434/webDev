
import { useParams } from "react-router-dom"

import { USERS_DATA } from "../pages/Home"

export default function Profile(){

    const {userId} = useParams()
    const user = USERS_DATA.find(user=>user.id===userId)
    return (
        <div className="mt-36 text-blue-950 bg-amber-200 text-center text-5xl py-5 flex flex-col gap-7">
            <h1>Hello, {user.name}</h1>
            <h1>Your id number is {user.id}</h1>
            <h1>{user.bio}</h1>
        </div>
    )
}