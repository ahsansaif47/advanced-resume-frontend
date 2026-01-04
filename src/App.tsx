import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/layout/Header';
import Hero from './components/hero/Hero';
import UploadSection from './components/upload/UploadSection';
import StatsPreview from './components/stats/StatsPreview';
import Footer from './components/layout/Footer';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <main>
                  <Hero />
                  <UploadSection />
                  <StatsPreview />
                </main>
              }
            />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
          <Footer />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
