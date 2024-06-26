import React from 'react';
import Navbar from "./Navbar";
import UncontrolledExample from './Hero';
import AutoLayoutSizingExample from './Section';
import Footer from './Footer'; // Importing Footer component

function App() {
  return (
    <div  style={{ backgroundColor: '#F0F0F0' }}>
      
      <Navbar />
      <h1 className="my-4 container text-center">labcolabs Blogging Website</h1>
      <UncontrolledExample />
      <h3 className="my-4 container text-center">Featured Articles</h3>
      <AutoLayoutSizingExample />
    </div>
  );
}

export default App;
