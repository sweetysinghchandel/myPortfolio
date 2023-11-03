import logo from './logo.svg';
import './App.css';
import Navbar from './components/nav';
import Hero from './components/hero';
import Footer from './components/footer';

function App() {
  return (
    <div className="b">
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  );
}

export default App;
