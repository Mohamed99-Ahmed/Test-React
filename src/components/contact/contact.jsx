import React, { useState } from "react";
import Style from "./Contact.module.css";
export default function Contact() {
  let [name,setName] = useState('')
  let [age,setAge] = useState('')
  let [email,setEmail] = useState('')
  let [password,setPassword] = useState('');
  function sendForm(e){
    e.preventDefault();
    let user = {
      name,
      age,
      email,
      password
    }
    console.log(user)
  }
  return (
    <>
      <main className="bg-scolor  text-white items-center justify-center h-screen flex flex-col gap-5">
        <h1 className="text-4xl uppercase font-bold">Contact us</h1>
        <div className="flex gap-5 items-center">
          <span className="w-24 h-1 bg-white"></span>
          <i className="fa-solid fa-star text-white"></i>
          <span className="w-24 h-1 bg-white"></span>
        </div>
        <form action="" className="flex flex-col gap-4" onSubmit={sendForm}>
           <input className="p-2 md:pr-60 rounded-md text-black outline-none " type="text" placeholder="UserName" value={name} onChange={(e)=>{setName(e.target.value)}}/>
           <input className="p-2 rounded-md text-black outline-none " type="number" placeholder="Your Age" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
           <input className="p-2 rounded-md text-black outline-none " type="email" placeholder="Your Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
           <input className="p-2 rounded-md text-black outline-none " type="password" placeholder="Your Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
           <button type="submit"  className="capitalize bg-slate-500 text-white self-start px-4 py-2 rounded-md"  >send messege</button>
        </form>
      </main>
    </>
  );
}
