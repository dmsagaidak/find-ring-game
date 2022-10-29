import React from 'react';
import './Cell.css';


interface CellProps extends React.PropsWithChildren {
  hasItem: boolean;
  clicked: boolean;
  open: React.MouseEventHandler;
}

const Cell: React.FC<CellProps> = (props) => {
  const classNames = ['Cell'];
  if(props.clicked){
    classNames.push('Cell-clicked');
  }
  return (
      <div className={classNames.join(' ')} onClick={props.open}>
    </div>
  );
};

export default Cell;