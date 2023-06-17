import './App.css';
import 'flowbite';
import PrimaryNavbar from './Components/PrimaryNavbar';
import Footer from './Components/Footer';
import Banner from './Components/Banner';
import ExploreOtherOptions from './Components/ExploreOtherOptions';
import ThingstoKnow from './Components/ThingstoKnow';
import { useEffect, useState } from 'react';
import MainSection from './Components/MainSection/MainSection';
import Location from './Components/Location';
import Reviews from './Components/Reviews/Reviews';
import SecondaryNavbar from './Components/SecondaryNavbar';

function App() {
  const [showSecondaryNav, setShowSecondaryNav] = useState(false)
  const [showBtn, setShowBtn] = useState(false)


  // Handle Menu scroll
  const handleMenuScroll = () => {
    // Secondary toggle
    if (window.scrollY > 500) {
      setShowSecondaryNav(true);
    } else {
      setShowSecondaryNav(false);
    }

  }


  // Handle Availability Scroll
  const handleAvailabilityScroll = () => {
    if (window.scrollY > 3253) {
      setShowBtn(true)
    } else {
      setShowBtn(false)
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", handleMenuScroll);
    document.addEventListener("scroll", handleAvailabilityScroll);

  }, [showSecondaryNav, showBtn])


  return (
    <div className="App">
      <PrimaryNavbar />
      {/* Secondary navbar */}
      <SecondaryNavbar
        showSecondaryNav={showSecondaryNav}
        showBtn={showBtn}
      />
      <Banner />
      <MainSection />
      <Reviews />
      <Location />
      <ThingstoKnow />
      <ExploreOtherOptions />
      <Footer />
    </div>
  );
}

export default App;
