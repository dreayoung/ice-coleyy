import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Gallery from './Pages/Gallery Page/GalleryPage';
import Contact from './Pages/Contact Page/Contact';

export default function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

// {/* <div>Copyright©2021 Cole Edwards, All Rights Reserved. All material on this site may not be reproduced, distributed, cached or otherwise used, except with my prior written permission.</div> */}
