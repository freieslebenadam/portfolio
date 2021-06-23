import React from 'react'
import Favicon from 'react-favicon'

import Navbar from './components/Navbar'
import Padder from './components/Padder'
import Footer from './components/Footer'

import Welcome from './sections/Welcome'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

function App() {
    return (
        <>
            <Favicon url='./favicon.ico' />
            <Navbar />
            <main>
                <Welcome />
                <About />
                <Padder />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </>
    )
}

export default App