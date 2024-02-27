import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import AirplanePage from './pages/Airplane';
import TheaterPage from './pages/Theater';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="" element={ <HomePage/> } />
        <Route path="/airplane" element={ <AirplanePage/> } />
        <Route path="/theater" element={ <TheaterPage/> } />
      </Routes>
    </div>
  );
}

export default App;
