import { Button, TextField, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { useState } from 'react';
import Timer from '../timer/timer';
import './custom-screen.css';
import BackgroundChanger from '../background-changer/background-changer';


function CustomScreen():JSX.Element {
  const [value, setValue] = useState<string | null>(null);
  const [valuePicker,setValuePicker] = useState<Date | null>(null);
  const [isDisabled, setDisabled] = useState<boolean>(true);

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
      <BackgroundChanger />
      {!value &&
          <div className='wrapper'>
            <DatePicker
              label="Date choise"
              value={valuePicker}
              disablePast
              renderInput={(params) => <TextField {...params} />}
              onChange={(newValue) => {
                setValuePicker(newValue);
              }}
              onAccept={(evt)=> {
                setDisabled(false);
              }}
              onError={(evt) => {
                if(evt === 'invalidDate' || evt === 'disablePast'){
                  setDisabled(true);
                } else if(evt === null){
                  setDisabled(false);
                }
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
          startIcon={<DateRangeIcon color="secondary"/>}
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
