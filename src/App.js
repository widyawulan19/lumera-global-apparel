import logo from './logo.svg';
import './App.css';
import { Routes, Route, Router } from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css';
import AosInit from './Utils/Aosinit';
import NewLanding from './Pages/NewLanding';


function App() {
  return (
    <div className="App">
      <AosInit />
      <Routes>
        <Route path='/' element={<NewLanding />} />
      </Routes>
    </div>
  );
}

export default App;
