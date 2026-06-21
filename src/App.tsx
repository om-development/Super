import './App.css'
import Banner from './components/Banner';
import Banner2 from './components/Banner2';
import FeaturedCandidate from './components/FeaturedCandidate';
import FeaturedCity from './components/FeaturedCity';
import Footer from './components/Footer';
import Hero from './components/Hero'
import How from './components/How';
import Joblist from './components/Joblist';
import Navbar from './components/Navbar'
import './index.css'

function App() {
 
  return (
    <>
      
        <Navbar/>
      <Hero />
      <How />
      <Joblist />
      <FeaturedCity />
      <Banner />
      <FeaturedCandidate />
      <Banner2/>
      <Footer/>
    </>
  )
}

export default App
