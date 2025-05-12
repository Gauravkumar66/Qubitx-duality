import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { NavItem } from '../../types';

interface LayoutProps {
  children: React.ReactNode;
  currentPath: string;
}

const navItems: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'Model', href: '/model' },
  { title: 'Results', href: '/results' },
  { title: 'Deployment', href: '/deployment' },
];

const Layout: React.FC<LayoutProps> = ({ children, currentPath }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar navItems={navItems} currentPath={currentPath} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;