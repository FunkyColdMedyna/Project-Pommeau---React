import { Route, Routes } from 'react-router-dom';
import InCider from './pages/InCider.js'
import AboutPage from './pages/AboutPage';
import ProducersPage from './pages/ProducersPage';
import EventsPage from './pages/EventsPage';
import MarketPage from './pages/MarketPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
        <Routes>
          <Route path='/' element={<InCider />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='producers' element={<ProducersPage />}/>
          <Route path='events' element={<EventsPage />} />
          <Route path='market' element={<MarketPage />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
