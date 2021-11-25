import * as React from 'react';
import TextField from '@mui/material/TextField';


export const DatePicker=({date})=> {
  return (<div>
        <TextField
        id="date"
        type="date"
        defaultValue={date}
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
        </div>
  );
}
