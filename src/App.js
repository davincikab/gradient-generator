import React from 'react';
import './App.css';

// pages
import Gradism from './pages/Gradism';
import GlassMorphism from './pages/GlassMorphism';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div className="App">
        <GlassMorphism />
      </div>
    );
  }
}

export default App;
