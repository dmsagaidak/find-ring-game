import React from 'react';
import Cell from '../../Copmonents/Cell/Cell';
import './App.css';

function App() {
  // const [cells, setCells] = useState([
  //   {hasItem: false, clicked: false, id: 1},
  //   {hasItem: false, clicked: false, id: 2},
  //   {hasItem: false, clicked: false, id: 3},
  // ])

  return (
    <div className="App">
      <Cell/>
    </div>
  );
}

export default App;
