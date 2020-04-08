import React from 'react';
import './home.css';
import Header from './header/header';
import Dashboard from './dashboard/dashboard';

function Home() {
  return (
    
    <div className="App background">

      {/* App Bar ( Header ) */}

      <div className="appbar-margin">
        <Header />
      </div>

      {/* Dashboard */}
    
      <Dashboard />

      {/* Footer */}

     
     </div>
     
     
  );
}

export default Home;
