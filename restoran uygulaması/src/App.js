import React, { useState } from 'react';
import Nav from './Nav';
import Restaurant from './Restaurant';
import './App.css';

function App() {
  const [restaurants, setRestaurants] = useState([]);
  
  return (
    <div className="restaurants">
      <Nav restaurants={restaurants} setRestaurants={setRestaurants} />
      {restaurants.map(rt => <Restaurant key={rt.id} restaurant={rt} />)}
    </div>
  );
}

export default App;
