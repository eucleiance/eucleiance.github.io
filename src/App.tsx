import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Cursor from './Components/Cursor';
import Footer from './Components/Footer';
import Landing from './Components/Landing';
import Nav from './Components/Nav';
import Copies from './Pages/Copies'; // Import the new page

function App() {
  return (
    <Router>
      <Cursor />
      <Nav />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Landing />
              <About />
              <Footer />
            </>
          }
        />

        {/* Projects Page */}
        <Route path="/copies" element={<Copies />} />
      </Routes>
    </Router>
  );
}

export default App;
