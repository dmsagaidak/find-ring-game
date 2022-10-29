import React from 'react';
import './Cell.css';


interface Props {
  hasItem: boolean;
  clicked: boolean;
}

const Cell = () => {

  return (
    <div className="Container">
      <div className="Cell"></div>
    </div>
  );
};

export default Cell;