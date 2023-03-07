import React from 'react';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';
import DeleteIcon from '@mui/icons-material/Delete';

import styles from './Command.module.css';

export default function Command({ command }){
    const { type } = command;
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
            <DeleteIcon fontSize="small"/>       
        </div>
    )
}