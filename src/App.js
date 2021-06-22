import React from 'react'

import Header from './components/Header'
import Padder from './components/Padder'
import Footer from './components/Footer'

import Welcome from './sections/Welcome'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

function App() {
    return (
        <div>
            <Header />
            <main>
                <Welcome />
                <About />
                <Padder h={650} />
                <Projects />
                <Contact />
                <Footer />
            </main>
        </div>
    )
}

export default App