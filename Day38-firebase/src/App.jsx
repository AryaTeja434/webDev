import React, { useEffect, useState } from 'react'
import axios from "axios"
import Phone from './Phone'
import {set, useForm} from "react-hook-form"

const url = "https://first-681eb-default-rtdb.asia-southeast1.firebasedatabase.app/"
const App = () => {
  const [numbers,setNumbers]=useState([])
  const {register,reset,handleSubmit} =useForm()

  function fetchData(){
    axios.get(`${url}.json`).then(obj=>{
        let tempNumbers=[]
        for (let key in obj.data){
          tempNumbers.push({id:key,...obj.data[key]})
        }
        setNumbers(tempNumbers)
      })
    console.log(numbers)
  }

  useEffect(()=>{
    fetchData()
  },[])

  function onSubmit(data){
    axios.post(`${url}.json`,data)
      .then(()=>{
        reset()
        fetchData()
      })
  }

  function deleteRequest(id){
    axios.delete(`${url}${id}.json`).then(fetchData)
  }

  return (
    <div className='mt-5' onSubmit={handleSubmit(onSubmit)}>
      <h1 className='text-center font-black text-2xl  text-amber-900 mb-3'>Add to your phonebook</h1>
      <form className='flex gap-3 justify-center'>
        <input  {...register("name")} className='border border-neutral-200 p-2' type="text" placeholder='Name' />
        <input {...register("phone")} className='border border-neutral-200 p-2' type="text" placeholder='Mobile number' />
        <input className='bg-black text-white p-2 rounded-lg cursor-pointer' type="submit" value="Add" />
      </form>
      <div className="flex gap-2 mt-5 flex-wrap justify-center">
        {
        numbers.map(number=>(
          <Phone id={number.id} name={number.name} phone={number.phone} key={number.id} deleteRequest={deleteRequest}/>
        ))
      }
      </div>
    </div>
  )
}

export default App
