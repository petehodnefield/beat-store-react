import Header from './components/Header';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';
import './styles.css'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Gallery></Gallery>
      <ContactForm></ContactForm>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
