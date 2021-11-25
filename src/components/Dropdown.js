import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem  from '@mui/material/MenuItem';
import Select  from '@mui/material/Select';
import "../App.css";
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import OutlinedInput from '@mui/material/OutlinedInput';


const ITEM_HEIGHT = 30;
const ITEM_PADDING_TOP = 4;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

export const Dropdown=(props)=> {
    const theme = useTheme();
  const [personName, setPersonName] = React.useState([props.Type]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  return (
      <div className="drop">
    <FormControl sx={{ m: 1, minWidth: 160 }}>
    <Select
      labelId="demo-multiple-chip-label"
      id="demo-multiple-chip"
      multiple
      value={personName}
      onChange={handleChange}
      input={<OutlinedInput id="select-multiple-chip" />}
      renderValue={(selected) => (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {selected.map((value) => (
            <Chip key={value} label={value} />
          ))}
        </Box>
      )}
      MenuProps={MenuProps}
    >
      {props.names.map((name) => (
        <MenuItem
          key={name}
          value={name}
          style={getStyles(name, personName, theme)}
        >
          {name}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
  </div>
  );
}
