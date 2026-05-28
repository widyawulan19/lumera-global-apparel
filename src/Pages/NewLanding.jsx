import React from 'react'
import Navbar from './Navbar'
import NewHero from './NewHero'
import Trust from './Trust'
import Services from './Services'
import Why from './Why'
import TargetClients from './TargetClient'
import ProcessSection from './ProcessSection'
import GlobalCoverageSection from './GlobalCoverage'
import CTASection from './CTASection'
import NewFooter from './NewFooter'


function NewLanding() {
  return (
    <div className='landing-container'>
        <Navbar/>
        <NewHero/>
        <Trust/>
        <Services/>
        <Why/>
        <TargetClients/>
        <ProcessSection/>
        <GlobalCoverageSection/>
        <CTASection/>
        <NewFooter/>
    </div>
  )
}

export default NewLanding