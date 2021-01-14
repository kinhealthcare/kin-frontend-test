import React from 'react';
import { Box, Text } from 'rebass/styled-components';
import { QuantitySlotContainer } from '../../../components/UIComponents/FrequencyCellConatiners/quantity-slot-container';

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
    minWidth: '143px',
  },
  addIcon: {
    color: '#0077ff',
    // marginLeft: "52px",
    marginTop: '8px',
  },
  cellConatiner: {
    marginTop: '7px',
    width: '133px',
    height: '40px',
    border: 'solid 2px #ebebeb',
    alignItems: 'center',
    justifyContent: 'center',
    // wordWrap: "break-word",
  },
  medName: {
    fontFamily: 'Roboto',
    fontSize: '12px',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#7f7f7f',
    marginTop: '10px',
  },
  newMed: {
    color: '#ffffff',
  },
  addMed: {
    alignItems: 'center',
    cursor: 'pointer',
    border: 'solid 2px #0077ff',
  },
  addMedName: {
    backgroundColor: '#0077ff',
  },
  container: {
    backgroundColor: '#ffffff',
    marginRight: '2px',
    paddingRight: '3px',
    paddingBottom: '5px',
    maxHeight: '100%',
    width: '146px',
    // height: "auto",
    // width: 'auto',
  },
  header: {
    height: '22.8%',
    borderBottomStyle: 'solid',
    borderBottomWidth: '2px',
    borderBottomColor: '#f0f0f0',
    paddingTop: '10px',
  },

  timeSlot: {
    fontFamily: 'Roboto',
    fontSize: '12px',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#7f7f7f',
  },
  data: {
    paddingLeft: '6px',
    alignItems: 'center',
    // height: "200px",
  },
};

export const QuantitySlot = ({ SlotDetails }) => {
  const time = SlotDetails.slotTime;
  const meds = SlotDetails.medicines;

  return (
    <Box style={styles.container}>
      <Box style={styles.header}>
        <Text as="p" style={styles.timeSlot}>
          {time}
        </Text>
      </Box>
      <Box style={styles.data}>
        <Box style={{ display: 'flex' }}>
          <QuantitySlotContainer medName="Crocin" />
          {/* callback */}
        </Box>
        {meds.map(pill => (
          <Box key={pill} style={{ ...styles.cellConatiner, borderRadius: '20px' }}>
            <Text as="p" style={styles.medName}>
              {pill}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

QuantitySlot.defaultProps = {
  SlotDetails: {
    slotTime: '10:30 AM',
    select: false,
    medicines: ['Vitamin C', 'Crocin', 'Crocin', 'Paracetamol'],
  },
};

export default QuantitySlot;
