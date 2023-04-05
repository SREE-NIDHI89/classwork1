import React,{useState}from "react";
import { useEffect } from "react";


export default function Usestates() {
    const[msg,setmsg]=useState("Hello dear one,learning React...?")
  
   useEffect(()=>{
        console.log('use Effect hook called..');
        setTimeout(()=>{
            setmsg("Hey!...React is Fun Learning ");
        },2000)
    })
    return (
    <div><p>{msg}</p></div>
  )
}