import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Collaborations from './pages/Collaborations';
import Features from './pages/Features';
import Gallery from './pages/Gallery';
import Leaderboard from './pages/Leaderboard';
import Boost from './pages/Boost';
import { ThemeProvider } from './context/ThemeContext';
import './styles/animations.css';
import './styles/glassmorphism.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden">
          {/* Animated Background Blobs */}
          <div className="fixed inset-0 z-0">
            <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-morph-slow" />
            <div className="absolute top-1/2 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-morph-reverse" />
            <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-indigo-400/20 to-cyan-500/20 rounded-full blur-3xl animate-morph-slow" />
          </div>
          
          <div className="relative z-10">
            <Navbar />
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/collaborations" element={<Collaborations />} />
                <Route path="/features" element={<Features />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/boost" element={<Boost />} />
              </Routes>
            </AnimatePresence>
            <Footer />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;