import { Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header';

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
