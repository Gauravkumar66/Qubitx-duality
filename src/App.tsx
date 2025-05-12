import React from 'react';
import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import ModelPage from './pages/ModelPage';
import ResultsPage from './pages/ResultsPage';
import DeploymentPage from './pages/DeploymentPage';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleNavigation = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleNavigation);

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('/') && !href.startsWith('//')) {
          event.preventDefault();
          window.history.pushState({}, '', href);
          setCurrentPath(href);
          window.scrollTo(0, 0);
        }
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('popstate', handleNavigation);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage />;
      case '/model':
        return <ModelPage />;
      case '/results':
        return <ResultsPage />;
      case '/deployment':
        return <DeploymentPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {renderPage()}
    </div>
  );
}

export default App;