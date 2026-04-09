import { Link } from "react-router-dom";

export const USERS_DATA = [
  { id: '1', name: 'Alice', bio: 'Frontend Developer' },
  { id: '2', name: 'Bob', bio: 'UI/UX Designer' },
  { id: '3', name: 'Charlie', bio: 'DevOps Engineer' },
];

function Home(){
    return (
        <>
            <h1 className="text-center mt-40 text-5xl">Hello World! This is Home🏡</h1>
            <ol className="text-center mt-5 text-2xl underline cursor-pointer">
                {
                    USERS_DATA.map(user=>{
                        return (
                            <li>
                                <Link to={`${user.id}`}>User {user.id}</Link>
                            </li>
                        )
                    })
                }
            </ol>
        </>

    )
}

export default Home;