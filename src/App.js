import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Banner from './components/Banner';
import ContactForm from './components/ContactForm';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <ContactForm/>
    </div>
  );
}

export default App;
