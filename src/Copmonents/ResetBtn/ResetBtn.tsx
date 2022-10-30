import React from 'react';
import './Reset.css';

interface Props {
reset: React.MouseEventHandler;
}

const ResetBtn: React.FC<Props> = ({reset}) =>{

  return (
    <button className="reset-btn" onClick={reset}>Reset</button>
  )

}

export default ResetBtn;