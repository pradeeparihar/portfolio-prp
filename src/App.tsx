import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Experiences from './Components/Experiences/Experiences'
import Hero from './Components/Hero/Hero'
import MyProjects from './Components/MyProjects/MyProjects'
import Navbar from './Components/Navbar/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <MyProjects />
      <Contact />
    </div>
  )
}

export default App