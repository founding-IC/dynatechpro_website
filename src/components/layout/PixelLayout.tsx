import React from 'react';
import PixelHeader from './PixelHeader';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const PixelLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <PixelHeader />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PixelLayout;