import React from 'react'
import Style from './About.module.css'
export default function About() {
  return (
    <>
    <main className='min-h-[80vh] bg-scolor text-white ' >
      <div className="container  flex flex-col gap-4 items-center py-8">
         <h2 className='aboutH font-bold text-4xl text-capitalize'>About me</h2> 
         <div className='flex gap-5 items-center'>
            <span className='w-24 h-1 bg-white'></span>
            <i className="fa-solid fa-star text-white"></i>
            <span className='w-24 h-1 bg-white'></span>
        </div>
        <article className='flex flex-col gap-4 md:flex-row justify-between md:w-[80%]'>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus obcaecati autem accusamus! Consequuntur explicabo omnis eveniet harum debitis. Doloremque.</p>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque adipisci nulla eum, est porro expedita dolorem maiores magnam autem nostrum recusandae voluptatem odio dolorum necessitatibus illo tempore eius et impedit!</p>
        </article>
      </div>
    </main>
    
    
     </>
  )
}
