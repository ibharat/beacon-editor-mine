import React, { useState, useEffect } from 'react';;
import Draggable from 'react-draggable';
import cx from 'classnames';
import './App.css';
import Command from './components/command/Command';
import { getCommands } from './api/spyder';

export default function App() {
  const [open, setOpen] = React.useState(true);
  const [commands, setCommands] = React.useState([]);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    (async () => {
      const c = await getCommands();
      setCommands(c);
    })();
  
    return () => {
      // this now gets called when the component unmounts
    };
  }, []);

  console.log(commands);

  return (
      <Draggable
        handle=".handle"
      >
        <div className={cx('editor')}>
          <div className={cx('handle', 'label')}>Commands</div>
          <div className='commands'>
            {commands.map(x => (<Command key={x._id} command={x}/>))}
          </div>
        </div>
      </Draggable>
  );
}