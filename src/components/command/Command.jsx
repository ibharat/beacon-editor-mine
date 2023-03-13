import React from 'react';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';
// import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import styles from './Command.module.css';
import { deleteCommand } from '../../api/spyder';

export default function Command({ command, refresh }){
  const { type, status } = command;

  const deleteCmd = async () => {
    await deleteCommand(command._id);
    refresh();
  }

  return (
    <div className={styles.command}>
      {type === 'link' && (
          <>
              <InsertLinkIcon />
              <div className={styles.label}>{command.label}</div>
          </>
      )}
      {type === 'actionable' && (
          <>
            <PanToolAltIcon />
            <div className={styles.label}>{command.label}</div>
          </>
      )}
      {/* <EditIcon className={styles.cursor} fontSize="small"/>        */}
      {status !== 'deleted' && (<DeleteIcon onClick={deleteCmd} className={styles.cursor} fontSize="small"/>)}   
    </div>
  )
}