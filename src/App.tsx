import './App.css'
import Banner from './components/Banner';
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
      <Banner/>
      <Footer/>
    </>
  )
}

export default App
