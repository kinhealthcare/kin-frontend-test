import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Box, Text } from 'rebass/styled-components';
import { Input } from '../../input';

const styles = {
  inputBox: {
    borderStyle: 'none',
    width: '35px',
    height: '36px',
    borderTopLeftRadius: '0px',
    borderBottomLeftRadius: '0px',
    fontFamily: 'Roboto',
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#0077ff',
    textAlign: 'center',
    padding: '0px',
    boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)',
  },
  widthHandle: {
    minWidth: '141px',
  },
  numberSlot: {
    width: '40px',
    marginTop: '7px',
    borderTopRightRadius: '20px',
    borderBottomRightRadius: '20px',
    height: '40px',
    border: 'solid 2px #0077ff',
  },
  borderRadiusHandle: {
    borderTopLeftRadius: '20px',
    borderBottomLeftRadius: '20px',
    minWidth: '93px',
  },
  addIcon: {
    color: '#0077ff',
    // marginLeft: "52px",
    marginTop: '8px',
  },
  cellContainer: {
    textAlign: 'center',
    marginTop: '7px',
    minWidth: '133px',
    height: '40px',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    border: 'solid 2px #0077ff',
  },
  medName: {
    fontFamily: 'Roboto',
    fontSize: '12px',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#7f7f7f',
    marginTop: '11px',
  },
  newMed: {
    color: '#ffffff',
  },
  addMedName: {
    backgroundColor: '#0077ff',
    width: '93px',
  },
};

export const QuantitySlotContainer = ({ medName = 'test' }) => {
  const [click, setClick] = useState(false);
  const [quantity, setQuantity] = useState('1');

  return (
    <Box style={{ display: 'flex' }}>
      <Box
        style={
          click === false
            ? {
                ...styles.cellContainer,
                borderRadius: '20px',
              }
            : {
                ...styles.cellContainer,
                ...styles.addMedName,
                ...styles.borderRadiusHandle,
              }
        }
        onClick={() => {
          setClick(!click);
        }}
      >
        {click === false ? (
          <AddIcon style={styles.addIcon} />
        ) : (
          <Text as="p" style={{ ...styles.medName, ...styles.newMed }}>
            {medName}
          </Text>
        )}
      </Box>
      {click === true ? (
        <Box style={styles.numberSlot}>
          <Input
            style={styles.inputBox}
            textAlign="left"
            value={quantity}
            onChange={event => setQuantity(event.target.value)}
          />
        </Box>
      ) : (
        ''
      )}
    </Box>
  );
};

export default QuantitySlotContainer;
