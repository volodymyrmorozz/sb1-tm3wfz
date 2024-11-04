import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <LanguageProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage language="en" />} />
              <Route path="fr/*" element={<HomePage language="fr" />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </LanguageProvider>
      </Router>
    </HelmetProvider>
  );
}

export default App;