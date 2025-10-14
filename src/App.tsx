import About from './Components/About/About'
import Experiences from './Components/Experiences/Experiences'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experiences />
    </div>
  )
}

export default App