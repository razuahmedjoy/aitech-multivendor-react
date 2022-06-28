import { Routes, Route } from 'react-router';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />}>
        </Route>

      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
