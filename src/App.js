import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Gallery from './Pages/Gallery Page/GalleryPage';
import Contact from './Pages/Contact Page/Contact';
import Highlights from './Pages/Highlights Page/Highlights';
import ScrollToTop from './Pages/Resusables/Scrolltotop';

export default function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/portfolio" element={<Gallery />} />
        <Route path="/highlights" element={<Highlights />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </ScrollToTop>
  );
}
