
import { useRef, useState } from "react"
import Card from "./Card"
import {useForm} from "react-hook-form"

export default function App(){
  const [users,setUsers] = useState([])
  const [controlInput,setcontrolInput] = useState("")

  const Username=useRef(null)

  const {register,reset,handleSubmit} = useForm()

  function onSubmit(data){
    
    setUsers([...users,data])
    reset()
  }
  return (
    <>
      {/* useForm */}
      <h1 className="text-4xl font-black text-center">useForm</h1>

      <form action="" onSubmit={handleSubmit(onSubmit)} className="flex justify-center gap-2 m-5">
        <input {...register("name")} type="text" placeholder="Name" className="p-2 border border-neutral-200 outline-none" />  
        <input {...register("email")} type="email" placeholder="email" className="p-2 border border-neutral-200 outline-none"/>
        <input {...register("img")} type="text" placeholder="Image link" className="p-2 border border-neutral-200 outline-none"/>
        <input  type="submit" className="bg-black text-white p-2 rounded-2xl" />
      </form>
      <div className="flex gap-2 flex-wrap text-center">
        {
        users.map(user=>(
          <Card name={user.name} email={user.email} img={user.img}/>
        ))
      }
      </div>
      {users.length===0 && <h1 className="text-center">Users:</h1>}

      {/* controlled components */}
      <h1 className="text-4xl font-black text-center  m-10">Controlled Components</h1>
      <div className="text-center">
        <input type="text" onChange={(e)=>setcontrolInput(e.target.value)} placeholder="enter text" className="p-2 border border-neutral-200 outline-none"/>
        <h1>Controlled input value: {controlInput}</h1>
      </div>

      {/* useRef */}
      <div className="text-center m-10">
        <h1 className="text-4xl font-black text-center  m-10">useRef</h1>
      <input ref={Username} type="text" placeholder="Username" className="p-2 border border-neutral-200 outline-none"/>
      <button onClick={()=>{document.querySelector("#para").innerText=Username.current.value}} className="mx-2 bg-black text-white p-2 rounded-2xl">submit</button>
      <p id="para"></p>
      </div>
    </>
  )
}