/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import AddIcon from '@material-ui/icons/Add';

const styles = {
  addIcon: {
    color: '#0077ff',
    marginTop: '8px',
  },
  cellConatiner: {
    textAlign: 'center',
    marginTop: '7px',
    minWidth: '183px',
    alignItems: 'center',
    cursor: 'pointer',
    height: '40px',
    borderRadius: '20px',
    border: 'solid 2px #0077ff',
  },
  medName: {
    fontFamily: 'Roboto',
    fontSize: '12px',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#7f7f7f',
  },
  newMed: {
    color: '#ffffff',
  },
  addMedName: {
    backgroundColor: '#0077ff',
  },
};

export const TimeSlotContainer = ({ click, handleClick, medName }) => {
  return (
    <div
      style={
        click === false
          ? styles.cellConatiner
          : {
              ...styles.cellConatiner,
              ...styles.addMedName,
            }
      }
      onClick={handleClick}
    >
      {click === false ? (
        <AddIcon style={styles.addIcon} />
      ) : (
        <p style={{ ...styles.medName, ...styles.newMed }}> {medName}</p>
      )}
    </div>
  );
};
