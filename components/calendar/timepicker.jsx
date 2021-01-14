import React, { useState } from 'react';
import { DesktopTimePicker as MuiTimePicker, LocalizationProvider } from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@material-ui/pickers/adapter/date-fns';

const useStyles = makeStyles({
  timepickerinput: {
    width: 150,
    height: 30,
  },
});

export const TimePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const classes = useStyles();

  return (
    <LocalizationProvider dateAdapter={DateFnsUtils}>
      <MuiTimePicker
        className={classes.container}
        clearable
        DialogProps={{ border: '2px solid pink' }}
        disableOpenPicker
        disableToolbar
        renderInput={extra => <TextField className={classes.timepickerinput} {...extra} />}
        value={selectedDate}
        onChange={newValue => setSelectedDate(newValue)}
      />
    </LocalizationProvider>
  );
};

export default TimePicker;
