import React, { useState } from 'react';
import { LocalizationProvider } from '@material-ui/pickers';
import DateFnsUtils from '@material-ui/pickers/adapter/date-fns';
import CloseIcon from '@material-ui/icons/Close';
import { Box, Text } from 'rebass/styled-components';
import { Input } from '../../../components/input';
import { TimePicker } from '../../../components';

const styles = {
  inputBox: {
    borderStyle: 'none',
    width: '20px',
    height: '70%',
    marginTop: '5px',
    outline: 'none',
    fontFamily: 'Roboto',
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#0077ff',
    textAlign: 'center',
    marginLeft: '7px',
  },
  numberSlot: {
    width: '40px',
    marginTop: '9px',
    borderTopRightRadius: '20px',
    borderBottomRightRadius: '20px',
    height: '36px',
    border: 'solid 2px #0077ff',
    marginLeft: '-2px',
  },
  medName: {
    fontFamily: 'Roboto',
    fontSize: '12px',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
    marginTop: '11px',
  },
  cellContainer: {
    textAlign: 'center',
    marginTop: '7px',
    minWidth: '93px',
    height: '40px',
    border: 'solid 2px #ebebeb',
    alignItems: 'center',
    backgroundColor: '#0077ff',
    borderTopLeftRadius: '20px',
    borderBottomLeftRadius: '20px',
  },
  timeInput: {
    fontFamily: 'Roboto',
    fontSize: '12px',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0077ff',
    textDecoration: 'underline',
    borderStyle: 'none',
    outline: 'none',
    marginLeft: '10px',
  },
  closeIcon: {
    cursor: 'pointer',
    color: 'rgba(0, 0, 0, 0.16)',
    float: 'right',
  },
  header: {
    height: '90px',
    borderBottomStyle: 'solid',
    borderBottomWidth: '2px',
    borderBottomColor: '#f0f0f0',
  },

  textAdd: {
    textDecoration: 'underline',
    cursor: 'pointer',
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontWeight: '500',
    textAlign: 'center',
    color: '#0077ff',
    marginTop: '50%',
  },
  container: {
    backgroundColor: '#ffffff',
    marginRight: '2px',
    minWidth: '146px',
    paddingRight: '3px',
    paddingBottom: '5px',
    height: '100%',
  },
};

export const NewQuantitySlot = ({ name, ...props }) => {
  const med = name;
  const [clicked, setClicked] = useState(false);
  // const [timeSlotData, setTimeSlotData] = useState();

  const addSlot = timeSlotData => {
    console.log(timeSlotData);
  };

  const handleData = date => {
    const timeSlotData = {
      slotTime: date,
      select: false,
      medicines: [med],
    };
    // console.log(timeSlotData);

    props.callback(timeSlotData);
  };

  return (
    <Box style={{ display: 'flex' }}>
      <LocalizationProvider dateAdapter={DateFnsUtils}>
        <Box style={styles.container}>
          {clicked === false ? (
            <Text as="p" style={styles.textAdd} onClick={() => setClicked(!clicked)}>
              + Add time slot
            </Text>
          ) : (
            <Box>
              <Box style={styles.header}>
                <CloseIcon style={styles.closeIcon} onClick={() => setClicked(!clicked)} />
                <br />
                <TimePicker callback={date => handleData(date)} />
              </Box>
              <Box style={{ display: 'flex', justifyContent: 'center' }}>
                <Box style={styles.cellContainer}>
                  <Text as="p" style={styles.medName}>
                    {med}
                  </Text>
                </Box>
                <Box style={styles.numberSlot}>
                  <Input defaultValue="1" style={styles.inputBox} type="text" />
                </Box>
              </Box>
            </Box>
          )}
        </Box>
        {clicked === true ? (
          <Box>
            <NewQuantitySlot callback={timeSlotData => addSlot(timeSlotData)} name={med} />
          </Box>
        ) : (
          ''
        )}
      </LocalizationProvider>
    </Box>
  );
};

export default NewQuantitySlot;
