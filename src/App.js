import { Route, Routes } from 'react-router-dom';
import InCider from './pages/InCider.js'
import AboutPage from './pages/AboutPage';
import ProducersPage from './pages/ProducersPage';
import EventsPage from './pages/EventsPage';
import MarketPage from './pages/MarketPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import ProducerDetailPage from './pages/ProducerDetailPage';
import EventDetailPage from './pages/EventDetailPage';

function App() {

  return (
    <div className='background-main App'>
      <Header />
        <Routes>
          <Route path='/' element={<InCider />} />
          <Route path='producers' element={<ProducersPage />}/>
          <Route 
            path='producers/:producerId' 
            element={<ProducerDetailPage />}
            />
          <Route path='events' element={<EventsPage />} />
          <Route 
           path='events/:eventId'
           element={<EventDetailPage />}
           />
          <Route path='market' element={<MarketPage />} />
          <Route path='about' element={<AboutPage />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
