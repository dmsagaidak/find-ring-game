import React from 'react';
import './Cell.css';


interface CellProps extends React.PropsWithChildren {
  hasItem: boolean;
  clicked: boolean;
  open: React.MouseEventHandler;
}

const Cell: React.FC<CellProps> = (props) => {
  const classNames = ['Cell'];
  let itemClass = 'hidden';
  if(props.clicked){
    classNames.push('Cell-clicked');
    if (props.hasItem){
      itemClass = 'show';
    }
  }






  return (
      <div className={classNames.join(' ')} onClick={props.open}>
        <span className={itemClass}>o</span>
      </div>
  );
};

export default Cell;