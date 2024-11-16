import React from "react";
import Style from "./Footer.module.css";
export default function Footer() {
  return (
    <>
    <main className="bg-mcolor text-white">
      <div className="container grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3 gap-5 justify-between  p-8">
        <article>
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-bold">LOCATION</h1>
            <p>7-street / Hassnfooda</p>
            <p>cairo, egypt 65243</p>
          </div>
        </article>
        <article>
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-bold"> AROUND THE WEB</h1>
            <div className="flex gap-2 items-center">
              <a className="p-2 border rounded-full  border-white" href="https://www.linkedin.com/in/eng-mohamed-ahmed/" target="_blank">
                <i class="fa-brands fa-linkedin-in p-1 "></i>
              </a>
              <a className="p-2 border rounded-full border-white" href="https://github.com/Mohamed99-Ahmed?tab=repositories" target="_blank">
                <i class="fa-brands fa-github p-1"></i>
              </a>
            </div>
          </div>
        </article>
        <article>
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-bold">ABOUT FREELANCER</h1>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </article>
      </div>
      </main>
      <footer className="bg-blue-950 text-white text-center py-4 ">Copyright © Your Website 2024</footer>
    </>
  );
}
