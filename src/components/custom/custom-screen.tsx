import { Button, TextField, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import DateRangeIcon from '@mui/icons-material/DateRange';
import {  useRef, useState } from 'react';
import Timer from '../timer/timer';
import './custom-screen.css';

function CustomScreen():JSX.Element {
  const [value, setValue] = useState<string | null>(null);
  const [valuePicker,setValuePicker] = useState<Date | null>(null);
  const [isDisabled, setDisabled] = useState<boolean>(true);

  const dataPickerRef = useRef(null);
  function rechoiseChange(){
    setValue(null);
  }
  function submitDate(){
    if (valuePicker !== null) {
      setValue(valuePicker.toString());
    }
  }
  return (
    <>
      {!value &&
          <div className='wrapper'>
            <DatePicker
              label="Basic example"
              value={valuePicker}
              ref={dataPickerRef}
              disablePast
              renderInput={(params) => <TextField {...params} />}
              onChange={(newValue) => {
                setValuePicker(newValue);
              }}
              onAccept={()=> {
                setDisabled(false);
              }}
              onError={() => {
                setDisabled(true);
              }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={submitDate}
              disabled={isDisabled}
            >
            Choise Date
            </Button>
          </div>}

      {value &&
      <div className={'wrapper-custom'}>
        <Button
          variant="contained"
          color="primary"
          onClick={rechoiseChange}
          startIcon={<DateRangeIcon />}
          className={'button-back'}
        >
          Rechoice of you&#39;r date
        </Button>
        <div className='wrapper'>
          <Typography color="primary" textAlign={'center'} variant="h4" component="h4">Your shoice date</Typography>
          <Timer data={value} isCustomDate/>
        </div>

      </div>}
    </>
  );
}

export default CustomScreen;
