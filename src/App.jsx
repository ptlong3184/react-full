import { Fragment, useState } from 'react';


import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

function App() {
  

  return (
    <Fragment>
      <Header />
      <main>
        <CoreConcept />
        <Examples />
      </main>
    </Fragment>
  );
}

export default App;