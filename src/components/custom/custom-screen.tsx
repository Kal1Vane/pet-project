import { TextField, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { useState } from 'react';


function CustomScreen():JSX.Element {

  const [value, setValue] = useState<Date | null>(null);

  return (
    <>
      <DatePicker
        label="Basic example"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
      <Typography variant="h4" component="h4">
        {value?.toString()}
      </Typography>
    </>
  );
}

export default CustomScreen;
