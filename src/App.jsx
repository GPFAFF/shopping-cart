import React from 'react';
import { Nav } from './components/Nav';
import { ItemContainer } from './components/Items/index';
import './index.scss';

export function App() {
  return (
    <div className="App">
      <div className="App--container">
        <Nav title="Greg's Store" />
        <div role="main">
          <ItemContainer />
        </div>
      </div>
    </div>
  );
}
