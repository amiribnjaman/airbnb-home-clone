import './App.css';
import 'flowbite';
import PrimaryNavbar from './Components/PrimaryNavbar';
import Footer from './Components/Footer';
import Banner from './Components/Banner';
import ExploreOtherOptions from './Components/ExploreOtherOptions';
import ThingstoKnow from './Components/ThingstoKnow';
import Reviews from './Components/Reviews';
import { useEffect, useState } from 'react';
import MainSection from './MainSection';

function App() {
  // const [name, setName] = useState('')

  // const handleScroll = () => {
  //   const show = window.scrollY > 100;
  //   if (show) {
  //     setName("nameAppear");
  //   } else {
  //     setName("name");
  //   }
  // }

  // useEffect(() => {
  //   document.addEventListener("scroll", handleScroll);

  //   console.log(name)
  // }, [name])


  return (
    <div className="App">
      <PrimaryNavbar />
      <Banner />
      <MainSection />
      <Reviews />
      <ThingstoKnow />
      <ExploreOtherOptions />
      <Footer />
    </div>
  );
}

export default App;
