import React from 'react';
import { InputLabel, TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { ruRU } from '@mui/material/locale';
import ruLocale from 'date-fns/locale/ru';
import styless from './CalendarInput.module.css';

export function CalendarInput() {
  const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider locale={ruLocale} dateAdapter={AdapterDateFns}>
      <div className={styless.inputGroup}>
        <InputLabel htmlFor="date-input">Destination / Hotel name</InputLabel>
        <DesktopDatePicker
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} size="small" fullWidth id="date-input" />}
        />
      </div>
    </LocalizationProvider>
  );
}
