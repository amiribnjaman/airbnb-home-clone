import './App.css';
import 'flowbite';
import PrimaryNavbar from './Components/PrimaryNavbar';
import Footer from './Components/Footer';
import Banner from './Components/Banner';
import ExploreOtherOptions from './Components/ExploreOtherOptions';
import ThingstoKnow from './Components/ThingstoKnow';
import Reviews from './Components/Reviews';

function App() {
  return (
    <div className="App">
     <PrimaryNavbar />
     <Banner />
     <Reviews />
     <ThingstoKnow />
     <ExploreOtherOptions />
     <Footer />
    </div>
  );
}

export default App;
