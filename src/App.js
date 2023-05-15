import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LeftSection from './components/section/LeftSection';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <LeftSection/>
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
