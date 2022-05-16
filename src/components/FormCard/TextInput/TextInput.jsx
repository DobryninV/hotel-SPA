import { InputAdornment, InputLabel, TextField } from '@mui/material';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import styless from './TextInput.module.css';

export function TextInput() {
  return (
    <div className={styless.inputGroup}>
      <InputLabel htmlFor="input-with-icon-adornment">Destination / Hotel name</InputLabel>
      <TextField
        id="input-with-icon-adornment"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PinDropOutlinedIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
        size="small"
        placeholder="Выберите значение"
      />
    </div>
  );
}
