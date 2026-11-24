import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from './components/Header'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
    useEffect(() => {
        AOS.init({
            duration: 400,
            once: true,
            offset: 40,
            easing: 'ease-out',
        })
    }, [])

    return (
        <div className="min-h-screen bg-[#FAFAF9] text-[#171717] selection:bg-[#315E8C] selection:text-white" id="top">
            <Header />
            <main>
                <HeroSection />
                <About />
                <Experience />
                <Projects />
                <Skills />
                <Education />
                <Certificates />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App
