import './App.css';
import Landing from './components/landing/Landing.jsx';
import Footer from './components/footer/Footer.jsx';
import PageOne from './components/pages/pageone/PageOne.jsx';
import PageTwo from './components/pages/pagetwo/PageTwo';

function App() {
  return (
    <div className="App">
      <Landing />
      <PageOne />
      <PageTwo />
      <Footer />
    </div>
  );
}

export default App;
