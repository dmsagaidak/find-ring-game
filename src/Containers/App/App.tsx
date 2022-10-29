import React, {useState} from 'react';
import Cell from '../../Copmonents/Cell/Cell';
import './App.css';

interface Cell {
  hasItem: boolean;
  clicked: boolean;
  id: number;
}

function App() {
  const [cells, setCells] = useState([
    {hasItem: false, clicked: false, id: 1},
    {hasItem: false, clicked: false, id: 2},
    {hasItem: false, clicked: false, id: 3},
    {hasItem: false, clicked: false, id: 4},
    {hasItem: false, clicked: false, id: 5},
    {hasItem: false, clicked: false, id: 6},
    {hasItem: false, clicked: false, id: 7},
    {hasItem: false, clicked: false, id: 8},
    {hasItem: false, clicked: false, id: 9},
    {hasItem: false, clicked: false, id: 10},
    {hasItem: false, clicked: false, id: 11},
    {hasItem: false, clicked: false, id: 12},
    {hasItem: false, clicked: false, id: 13},
    {hasItem: false, clicked: false, id: 14},
    {hasItem: false, clicked: false, id: 15},
    {hasItem: false, clicked: false, id: 16},
    {hasItem: false, clicked: false, id: 17},
    {hasItem: false, clicked: false, id: 18},
    {hasItem: false, clicked: false, id: 19},
    {hasItem: false, clicked: false, id: 20},
    {hasItem: false, clicked: false, id: 21},
    {hasItem: false, clicked: false, id: 22},
    {hasItem: false, clicked: false, id: 23},
    {hasItem: false, clicked: false, id: 24},
    {hasItem: false, clicked: false, id: 25},
    {hasItem: false, clicked: false, id: 26},
    {hasItem: false, clicked: false, id: 27},
    {hasItem: false, clicked: false, id: 28},
    {hasItem: false, clicked: false, id: 29},
    {hasItem: false, clicked: false, id: 30},
    {hasItem: false, clicked: false, id: 31},
    {hasItem: false, clicked: false, id: 32},
    {hasItem: false, clicked: false, id: 33},
    {hasItem: false, clicked: false, id: 34},
    {hasItem: false, clicked: false, id: 35},
    {hasItem: false, clicked: false, id: 36}
  ])

  const [cellClicked, setCellClicked] = useState(' ');

  const [count, setCount] = useState(0);


  const clickCell = (index: number) =>{
    const cellsCopy = [...cells];
    if (cellClicked) {
      const cellCopy = {...cells[index]};
      cellCopy.clicked = true;
      cellsCopy[index] = cellCopy;
      setCells(cellsCopy);
      setCellClicked(' ');
      setCount(count+1);
    }
  }


  const cellsList: React.ReactNode = cells.map((cell: Cell, index: number) =>(
    <Cell
      key={cell.id}
      hasItem={cell.hasItem}
      clicked={cell.clicked}
      open={() => clickCell(index)}
    >
    </Cell>
  ));

  return (
    <div className="App">
      <div className="Container">
        {cellsList}
      </div>
      <p>Tries: {count}</p>
    </div>
  );
}

export default App;
