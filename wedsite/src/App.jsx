import './App.css'
import { useState } from "react";
import LandingButton from "./components/LandingCard";
import Card from './components/Card';
import NavBar from './components/Nav';
import { motion } from "framer-motion";

function App() {
  const [showCard, setShowCard] = useState(false);

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        {/* navbar */}
        <NavBar/>
        {/* landing envelope & Content */}
        {!showCard && (
          <div className='mt-16'>
            <LandingButton onClick={() => setShowCard(true)} />
          </div>
          
        )}
        {/* open card content */}
        {showCard && (
          <>
            <Card>
              <img
              src="/openEnvelope.png" 
              alt="open invite"
              className='mt-16'
              >
              </img>
            </Card>
            {/* images & btns */}
            <div 
            className='relative w-full md:w-1/2 p-4 text-center m-auto'>                      
              <img
              src="/desktopApp.png" 
              alt="go to details"
              className='w-full h-auto justify-center m-auto z-30'
              />
              <a 
              className='absolute md:bottom-[60px] sm:bottom-[60px] bottom-[40px] md:right-[60px] sm:right-[30px] right-[30px] md:w-[240px] sm:w-[200px] w-[140px]'
              href="https://andrew-and-carolyn.wedsites.com/"
              target='_blank'                
              >
                <img src='/detailButton.png'
                  className='transition-transform duration-300 hover:scale-102'
                />
              </a>
              <a 
              className='absolute md:bottom-[60px] sm:bottom-[60px] bottom-[50px] md:left-[30px] sm:left-[30px] left-[30px] md:w-[280px] sm:w-[200px] w-[180px]'
              href="https://andrew-and-carolyn.wedsites.com/rsvp"
              target='_blank'
              >
                <img src='/rsvpBtn.png'
                className='transition-transform duration-300 hover:scale-102'/>
              </a>
            </div>
            {/* signature */}
            <div className='w-full py-16 px-8'>
              <p className='text-xl md:text-4xl font-serif'>We cant' wait to celebrate with you!</p>
              <p className='text-4xl md:text-6xl font-script md:py-4'>Andrew & Carolyn</p>
            </div>
          </>
        )}
      </div>
    </>
  )
}


export default App
