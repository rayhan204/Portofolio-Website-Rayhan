import 'react'
import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Education from './components/Education'
import Certificates from './components/Certificates'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false, 
      offset: 100,
    })
  }, [])
  return (
    <div className="pt-24">
      <Header/>
      <HeroSection/>
      <Education/>
      <Certificates/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App