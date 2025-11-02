import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Experiences from './Components/Experiences/Experiences';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import MyProjects from './Components/MyProjects/MyProjects';
import Navbar from './Components/Navbar/Navbar';
import Quiz from './Components/Quiz/Quiz';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Experiences />
              <MyProjects />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
};

export default App;
