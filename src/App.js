import React from 'react';
import '../node_modules/bulma/css/bulma.min.css';
import Header from './Components/Header/Header.js'

function App() {
  return (
    <div>
      <Header />
      <div className="container px-3">
        <h2 className="title mt-5">Rentrez vos tâches à faire</h2>
      </div>
    </div>
  );
}

export default App;
