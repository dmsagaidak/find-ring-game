import React, {useState} from 'react';
import Cell from '../../Copmonents/Cell/Cell';
import './App.css';

interface Cell {
  hasItem: boolean;
  clicked: boolean;
  id: number;
}

function App() {

  const createCells = () =>{
    const cells: Cell[] = []
    for (let i = 0; i < 36; i ++) {
      const ids = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];
      const cell = {hasItem: false, clicked: false, id: ids[i]};
      cells.push(cell);
    }
    const randomIndex = Math.floor(Math.random() * 35);
    cells[randomIndex].hasItem = true;
    return cells
  };


  const [cells, setCells] = useState(createCells());

  const [cellClicked, setCellClicked] = useState(' ');

  const [count, setCount] = useState(0);


  const clickCell = (index: number) =>{
    const cellsCopy = [...cells];
    if (cellClicked) {
      const cellCopy = {...cells[index]};
      setCount(count+1);
      cellCopy.clicked = true;
      cellsCopy[index] = cellCopy;
      setCells(cellsCopy);
      setCellClicked(' ');
    }
  }

  const reset = () =>{
    setCells(createCells);
    setCount(0);
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
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
