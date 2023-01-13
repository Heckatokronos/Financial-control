import React, { memo } from 'react';

import './Card.css';

const Card = memo((props) => {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
})

export default Card
