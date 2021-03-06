import React from 'react';
import './App.css';
import Landing from './components/landing/Landing.jsx';
import Footer from './components/footer/Footer.jsx';
import PageOne from './components/pages/pageone/PageOne.jsx';
import PageTwo from './components/pages/pagetwo/PageTwo';
import useStickyState from './components/hooks/stickyState/useStickyState';
import PageThree from './components/pages/pagethree/PageThree.jsx';

function App() {
  const [color, setColor] = useStickyState("teal", "color");
  return (
    <div className="App">
      <Landing color={color} />
      <PageOne color={color} />
      <PageTwo callback={(e) => setColor(e)} curColor={color} />
      <PageThree color={color} />
      <Footer />
    </div>
  );
}

export default App;
