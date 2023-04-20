import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import NotFoundPage from './pages/NotFoundPage';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import { GithubProvider } from './context/github/GithubContext';

const App = () => {
  return (
    <GithubProvider>
      <Router>
        <div className='flex flex-col justify-between h-screen'>
          <Navbar />
          <main className='container mx-auto px-3 pb-12'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/*' element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </GithubProvider>
  );
};

export default App;
