import React from 'react';

interface Props {
  triesCount: number;
}

const Tries: React.FC<Props> = ({triesCount}) => {
  const triesStyle: React.CSSProperties ={
    color: '#015210',
    fontWeight: 800,
  }
  return (
    <p style={triesStyle}> Tries: {triesCount}</p>
  )
}

export default Tries;