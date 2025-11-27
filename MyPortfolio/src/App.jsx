import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Background from './components/Background'
import './index.css'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Background>
        <About />
        <Skills />
      </Background>
    </>
  )
}

export default App
