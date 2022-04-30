import React from 'react';

// components
import Header from 'layout/Header';
import NavMenu from 'layout/NavMenu';
import Footer from 'layout/Footer';

const Layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <NavMenu />
      <main className="container mx-auto flex-auto px-4 xl:px-6 py-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
