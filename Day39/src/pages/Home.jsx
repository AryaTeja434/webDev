import React from 'react'
import axios from "axios"
import { useRef } from "react";
import { useState } from "react";
import Markdown from 'react-markdown'
import { Skeleton } from "@/components/ui/skeleton"

function Home() {
  let inputValue = useRef(null)
  let [response,setResponse] = useState("Hi! How can I help you?")
  let [status,setStatus]=useState(false)


  let apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent";
  const apiKey = 'Your Api Key'
  const headers = {
      'Content-Type': 'application/json',
      'x-goog-api-key': `${apiKey}`,
  }
  

  const fetchData=()=>{
    setStatus(true)
    const requestBody = { 
      contents: [
          {
              parts:[
                {
                  text: inputValue.current.value || "How to use you?"
                }
              ]
          }
      ]
    }
    
    axios.post(apiUrl, requestBody, {headers}).then(({data})=>{
      setResponse(data.candidates[0].content.parts[0].text)
      document.getElementById("div").classList.remove("text-center")
      console.log(data)
      setStatus(false)
    }
  )}
  
  return (
    <div className="">
      <div id="div" className="mx-auto my-36 p-5 w-3/4 text-center">
          {status ? 
            <div className="space-y-2 ">
              <Skeleton className="h-8 w-[400px]" />
              <Skeleton className="h-8 w-96" />
              <Skeleton className="h-8 w-86" />
              <Skeleton className="h-8 w-76" />
            </div>
                  : 
            <Markdown>{response}</Markdown>        
          }
           
      </div>

      <div className="w-full pb-6 fixed bottom-0  bg-white">
        <div className="flex justify-center w-full  px-5 py-3 gap-2">
          <input ref={inputValue} className="w-3/4 border-1 rounded-2xl p-3" type="text" placeholder="Ask Gemini" />
          <button className="cursor-pointer bg-black text-white rounded-2xl p-3" onClick={fetchData}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Home
