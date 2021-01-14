import React from 'react';
import { Box } from 'rebass/styled-components';
import { Container, Heading, SubText, SmallText } from './components/add-medication';
import { Input } from '../../components/input';
import { QuantitySlot } from './frequency-components/quantity-slot';
import { NewQuantitySlot } from './frequency-components/new-quantity-slot';

const slotData = [
  {
    slotTime: '10:30 AM',
    select: false,
    medicines: ['Vitamin C', 'Crocin', 'Crocin', 'Paracetamol'],
  },
  {
    slotTime: '11:30 AM',
    select: false,
    medicines: ['Vitamin C', 'Paracetamol'],
  },
  {
    slotTime: '12:30 PM',
    select: false,
    medicines: ['Paracetamol'],
  },
  {
    slotTime: '12:30 PM',
    select: false,
    medicines: ['Paracetamol'],
  },
];

export const TimeQuantity = () => {
  const nameMed = 'Labradoodle';

  const addSlot = timeSlotData => {
    console.log(timeSlotData);
  };

  return (
    <Box>
      <Container>
        <Box style={{ display: 'flex' }}>
          <Box>
            <Heading marginBottom="15px">Time and Quantity?</Heading>
            <SubText>
              Add the drug to existing time slot or create a new one. Change quantity per time next
              to the drug.
            </SubText>
          </Box>
        </Box>
        <Box style={{ display: 'flex', height: '70%' }}>
          <Box style={{ marginLeft: '-7%', marginTop: '3%', marginRight: 18 }}>
            <SmallText margin="0px" width="4.7%">
              Edit All
            </SmallText>
            <SmallText marginBottom="11%" width="4.7%">
              (Quantity)
            </SmallText>
            <Input margin="0px" placeholder="1" size="small" textAlign="center" />
          </Box>
          <Box
            style={{
              display: 'flex',
              height: '100%',
              overflow: 'auto',
              width: 'auto',
              marginLeft: '-5.5%',
            }}
          >
            <NewQuantitySlot callback={timeSlotData => addSlot(timeSlotData)} name={nameMed} />
            {slotData.map(slot => (
              <QuantitySlot key={slot} SlotDetails={slot} />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

TimeQuantity.defaultProps = {
  route: {
    drugName: 'Panadol',
    drugStrength: 20,
    drugUnit: 'mg',
    frequency: {
      type: 'Everyday',
    },
  },
};

export default TimeQuantity;
