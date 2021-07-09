import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavbar from './components/TopNavbar'
import UnderNavbar from './components/UnderNavbar';
import MainCarousel from './components/MainCarousel';
import NetFooter from './components/NetFooter';
import CarouselTwo from './components/CarouselTwo';
import CarouselThree from './components/CarouselThree';


function App() {
  return (
    <div className="App">
      <TopNavbar/>
      <UnderNavbar/>
      <MainCarousel/>
      <CarouselTwo />
      <CarouselThree />
      <NetFooter/>
    </div>
  );
}

export default App;
