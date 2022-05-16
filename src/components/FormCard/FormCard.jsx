import { Typography } from '@mui/material';
import { CalendarInput } from './CalendarInput';
import styless from './FormCard.module.css';
import { TextInput } from './TextInput';

export function FormCard() {
  return (
    <div className={styless.container}>
      <Typography variant="h2" color="#fff" fontWeight={700} gutterBottom component="div">
        Amazing LOL Waiting for You
      </Typography>
      <div className={styless.card}>
        <form className={styless.formWrapper}>
          <TextInput />
          <CalendarInput />
          <CalendarInput />
          <TextInput />
          <div>
            <button type="button" className="button">
              Забронировать
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
