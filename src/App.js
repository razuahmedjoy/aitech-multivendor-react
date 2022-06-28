import { Routes, Route } from 'react-router';
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
    </div>
  );
}

export default App;
