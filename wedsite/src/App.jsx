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
            {/* desktop viewer */}
            <div 
            className='relative w-full md:w-1/2 p-4 text-center m-auto'>                      
              <img
              src="/desktopApp.png" 
              alt="go to details"
              className='w-full h-auto justify-center m-auto z-30'
              />
              <a 
              className='absolute md:bottom-[60px] bottom-[60px] md:right-[60px] right-[30px] md:w-[240px] w-[160px]'
              href="https://andrew-and-carolyn.wedsites.com/"
              target='_blank'                
              >
                <img src='/detailButton.png'
                
                />
              </a>
              <a 
              className='absolute md:bottom-[60px] bottom-[60px] md:left-[30px] left-[20px] md:w-[280px] w-[200px]'
              href="https://andrew-and-carolyn.wedsites.com/rsvp"
              target='_blank'
              >
                <img src='/rsvpBtn.png'
                className='w-[520px]'/>
              </a>
            </div>
            {/* signature */}
            <div className='w-full py-16 px-8'>
              <p className='text-2xl md:text-4xl font-serif'>We cant' wait to celebrate with you!</p>
              <p className='text-4xl md:text-6xl font-script md:py-4'>Andrew & Carolyn</p>
            </div>
          </>
        )}
      </div>
    </>
  )
}


export default App
