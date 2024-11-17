import React, { useState } from "react";
import Style from "./Portfolio.module.css";
export default function Portfolio() {
  let imgs = [
    {
      id: 1,
      src: `./Test-React//img/poert1.png`,
    },
    {
      id: 2,
      src: `./Test-React//img/port2.png`,
    },
    {
      id: 3,
      src: `./Test-React//img/port3.png`,
    },
    {
      id: 4,
      src: `./Test-React//img/poert1.png`,
    },
    {
      id: 5,
      src: `./Test-React//img/port2.png`,
    },
    {
      id: 6,
      src: `./Test-React//img/port3.png`,
    },
  ];
  let [imgSrc, setImgSrc] = useState('');
  let [imgAppear, setImgAppear] = useState(true);
  function Appear (st){
      setImgAppear(st);
  }
  function imgOverlay(src) {
    setImgSrc(src);
    setImgAppear(true)
  }
  return (
    <>
      <main className=" text-white  bg-scolor flex flex-col items-center relative ">
        <h1 className="text-4xl uppercase font-bold p-5 ">My Work</h1>
        <div className="flex gap-5 items-center">
          <span className="w-24 h-1 bg-white"></span>
          <i className="fa-solid fa-star text-white"></i>
          <span className="w-24 h-1 bg-white"></span>
        </div>
        <div className="content mt-10 container mb-20    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {imgs.map((el) => (
            <figure
              className="relative group/parent"
              key={el.id}
              onClick={() => {
                imgOverlay(el.src);
              }}
            >
              <img src={el.src} className="block" alt="img1" />
              <div className=" overimg opacity-0 group-hover/parent:opacity-100 cursor-pointer transition-opacity duration-1000    top-0 left-0 right-0 bottom-0 absolute z-20 bg-blue-400 flex bg-opacity-35 h-[100%] w-[100%]  justify-center items-center">
                <i class="fa-solid fa-plus fa-2xl font-extrabold text-white"></i>
              </div>
            </figure>
          ))}
        </div>
        {imgSrc && imgAppear ? (
          <div className="overlay  bg-white bg-opacity-45 absolute h-[100%] w-screen z-50 flex justify-center items-center"  onClick={(e)=>{Appear(e.target.classList.contains("img"))}}>
            <img src={imgSrc} className="img block w-[50%]" alt="img3" />
          </div>
        ) : (
          ""
        )}
      </main>
    </>
  );
}
