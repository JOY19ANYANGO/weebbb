import React from 'react';
import './App.css';
import starsVideo from "./stars.mp4";

function App() {
  return (
    <div className='relative flex flex-col items-center justify-center min-h-screen text-white'>
      <div className='hero-container'>
      <video autoPlay muted loop id="myVideo" >
        <source src={starsVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/uZ55mDL7dA0?si=vz7FshVZCT35Icvu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      
      {/* Content */}
      <div className='relative z-10 p-10 rounded-lg shadow-lg text-center font-dancing-script'>
        <h1 className='text-8xl typing mb-4'>Happy Birthday Ezra</h1>
        <div className='text-5xl mb-4'>🎉🎂🎈</div>
        <p className='text-3xl  mb-2'>Wishing you a fantastic day filled with joy, laughter, and all your favorite things.</p>
        <p className='text-3xl  mb-2'>May this year bring you even more happiness and success. </p>
        <p className='text-3xl  '>  Cheers to many more amazing moments and memories ahead!</p>
        <p className='text-3xl typing'>Enjoy your special day!</p>
        
      </div>
      </div>
    </div>
  );
}

export default App;


