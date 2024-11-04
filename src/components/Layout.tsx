import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#1a1a2e]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}