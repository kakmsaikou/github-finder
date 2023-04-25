import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import NotFoundPage from './pages/NotFoundPage';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import { GithubProvider } from './context/github/GithubContext';
import { AlterProvider } from './context/alert/AlertContext';
import Alert from './components/layout/Alert';
import UserPage from './pages/UserPage';

const App = () => {
  return (
    <GithubProvider>
      <AlterProvider>
        <Router>
          <div className='flex flex-col justify-between h-screen'>
            <Navbar />
            <main className='container mx-auto px-3 pb-12'>
              <Alert />
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/user/:login' element={<UserPage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='notfound' element={<NotFoundPage />} />
                <Route path='/*' element={<NotFoundPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlterProvider>
    </GithubProvider>
  );
};

export default App;
