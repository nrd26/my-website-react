import './App.css';
import TopNav from './components/TopNav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Workshops from './pages/Workshops';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopNav />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About/>} />
          <Route path="workshops" element={<Workshops/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
