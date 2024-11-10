'use client';
import { TypeAnimation } from 'react-type-animation';
import Link from "next/link";

export default function Main(){
return(
  <div>
  <main className="relative bg-gray-900 text-white min-h-screen flex items-center justify-center text-center py-24 bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-background.jpg')" }}>
  {/* Overlay to improve text contrast */}
  <div className="absolute inset-0 bg-black opacity-50"></div>

  
  {/* Content */}
  <div className="relative z-10 max-w-2xl mx-auto text-center px-6">
  <h2 className="text-4xl font-extrabold text-white mb-20 animate__animated animate__fadeIn animate__delay-1s">
      Welcome to My Portfolio
    </h2>
    {/* Your Image (Optional) */}
    <div className="mb-8">
      <img 
        src="/pic/girl-avatar.jpg" 
        alt="Your Name" 
        className="w-40 h-40 rounded-full mx-auto border-4 border-white shadow-lg transform hover:scale-105 transition-transform duration-300"
      />
    </div>
    
    {/* <h2 className="text-4xl font-extrabold text-white mb-4 animate__animated animate__fadeIn animate__delay-1s">
      Welcome to My Portfolio
    </h2> */}
    <h1 >
    <span className="text-4xl font-extrabold text-purple-700 mb-4 animate__animated animate__fadeIn animate__delay-1s">Hello,I'm {""}
      </span>
      <TypeAnimation
sequence={[
  'Farah Almas',
  1000,
  'Web Developer',
  1000,
  'UI/UX Developer',
  1000,
  'Content Creator',
  1000,
]}
wrapper="span"
speed={50}
style={{ fontSize: '2em', display: 'inline-block',color:'#ec4899'}}
repeat={Infinity}/>
    </h1>
    <p className="text-lg text-gray-300 mb-8 animate__animated animate__fadeIn animate__delay-2s">
      I'm a passionate developer who loves building beautiful websites and applications.
    </p>


<div>
  <Link href={"./contact"}><button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 transition-colors duration-300 transform hover:scale-105  text-white">Hire Me</button></Link>
  <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3"><span className="block bg-[#181818] hover:bg-slate-900 rounded-full px-5 py-2  transition-colors duration-300 transform hover:scale-105">Download CV</span></button>
</div>



  </div>
</main>
  </div>
)
}