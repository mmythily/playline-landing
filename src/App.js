import './App.css';

import MainDashboard from './components/MainDashboard';
import Navigat from './components/Navigat'

function App() {
  return (
    <div className="App">
      <header>
        <img 
          id='sports-lotto-logo' 
          src='../assets/logo/logo@2x.png' 
          alt='PlayLine Sports Lotto Logo'
          width='300px'/>
      </header>
      <MainDashboard />
      <Navigat />
    </div>
  );
}

export default App;
