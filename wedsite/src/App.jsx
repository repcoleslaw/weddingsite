import './App.css'
import { useState } from "react";
import LandingButton from "./components/LandingCard";
import Card from './components/Card';
import ScrollRevealCard from "./components/ScrollRevealCard";
import NavBar from './components/Nav';

function App() {
  const [showCard, setShowCard] = useState(false);

  return (
    <>
<div className="min-h-screen flex flex-col items-center justify-center">
      <NavBar/>
      {!showCard && (
        <LandingButton onClick={() => setShowCard(true)} />
      )}
      {showCard && (
        <>
          <Card>
            <img
             src="/openEnvelope.png" 
            alt="open invite" 
            >
            </img>
          </Card>
            <div className='max-w-3/4 h-full w-3/4'>
              <div className='relative m-auto border min-h-1/2'>
                <div className='absolute top-0 left-22 w-1/2 h-auto z-20'>
                    <img
                    src="/dateCard.png" 
                    alt="open invite"
                    />
                </div>
                <div className='absolute top-35 right-30 w-1/2 h-auto z-10'>
                  <img
                  src="/detailCard.png" 
                  alt="open invite" 
                  />
                </div>
                  <div className='absolute top-80 left-40 w-1/4 border rounded-full z-10'>
                    <a href="https://andrew-and-carolyn.wedsites.com/" target='_blank'>
                    <img
                    src="/detailButton.png" 
                    alt="go to details" 
                    />
                    </a>
                  </div>
                  <div className='absolute top-80 right-40 w-1/4 rounded-full z-10'>
                    <a href="https://andrew-and-carolyn.wedsites.com/rsvp" target='_blank'>
                    <img
                    src="/rsvpBtn.png" 
                    alt="go to details" 
                    />
                    </a>
                  </div>              
              </div>
            </div>


        </>
      )}
    </div>
    </>
  )
}


export default App
