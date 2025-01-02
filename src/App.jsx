import React from 'react';
import './App.css';
import starsVideo from "./stars.mp4";

function App() {
  return (
    <div className='relative flex flex-col items-center justify-center min-h-screen text-white'>
      <div className='hero-container'>
        <video autoPlay muted loop id="myVideo">
          <source src={starsVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content */}
        <div className='relative z-10 p-10 rounded-lg shadow-lg text-center font-dancing-script'>
          <h1 className='text-8xl typing mb-4'>Happy New Year, Tim! 🎆</h1>
          <div className='text-5xl mb-4'>🎉💖✨</div>
          <p className='text-3xl mb-2'>
            Thank you for being one of my closest friends in 2024. Your support and presence meant the world to me.
          </p>
          <p className='text-3xl mb-2'>
            Wishing you an amazing 2025 filled with happiness, success, and unforgettable memories. 
          </p>
          <p className='text-3xl'>Cheers to a year full of love and laughter! ❤️🥂</p>
          <p className='text-3xl typing'>You’re truly appreciated. Happy New Year! 💕</p>
        </div>
      </div>
    </div>
  );
}

export default App;



