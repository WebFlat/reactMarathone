import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import bg1 from './assets/bg1.jpg';
import bg2 from './assets/bg3.jpg';


function App() {
  return (
    <div className="App">
        <Header title="Hello" descr="How are you?" />
        <Layout id="1" title="Layout 1" descr="with image" urlBg={bg1} />
        <Layout id="2" title="Layout 2" descr="no image" colorBg />
        <Layout id="3" title="Layout 3" descr="with image" urlBg={bg2} />
        <Footer />
    </div>
  );
}

export default App;
