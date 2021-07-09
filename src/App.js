import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavbar from './components/TopNavbar';
import UnderNavbar from './components/UnderNavbar';
//import MainCarousel from './components/MainCarousel';
import NetFooter from './components/NetFooter';

function App() {
  return (
    <div className="App">
      <TopNavbar/>
      <UnderNavbar/>
      <NetFooter />
    </div>
  );
}

export default App;
