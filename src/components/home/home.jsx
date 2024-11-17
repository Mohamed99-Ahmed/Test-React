import React from 'react'
import Style from './Home.module.css'
export default function Home() {
  
  return (
    <>
    <main className='bg-scolor  text-white items-center justify-center h-screen flex flex-col gap-5'>
        <div>
          <img src="/Test-React/img/me.jpeg" alt="my img" className={`me w-[200px] rounded-full ${Style.me}`}/>
        </div>
        <h1 className='text-4xl uppercase font-bold'>start framework</h1>
        <div className='flex gap-5 items-center'>
            <span className='w-24 h-1 bg-white'></span>
            <i className="fa-solid fa-star text-white"></i>
            <span className='w-24 h-1 bg-white'></span>
         
        </div>
        <p className='capitalize text-lg'>frontend developer - geologist</p>

    </main>
    </>
  )
}
