import React from 'react';
import { Input } from './components/Input';
import { Dropdown } from './components/Dropdown';
import { DatePicker } from './components//DatePicker';
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import './App.css';


const TRow = ({ data }) => {
  const Names = ['Charan', 'Naveen'];
  const status = ['Credited', 'Debited'];
  
  return (  <TableRow>   
            <TableCell className='Tcell'>
              <Input Name={data[0]} />
            </TableCell>
            <TableCell className='Tcell'>
              <Dropdown names={Names} Type={data[1]} />
            </TableCell>
            <TableCell className='Tcell'>
              <DatePicker date={data[2]} />
            </TableCell>
            <TableCell className='Tcell'>
              <Input Name={data[3]} />
            </TableCell>
            <TableCell className='Tcell'>
              <Input Name={data[4]} />
            </TableCell>
            <TableCell className='Tcell'>
              <Input Name={data[5]} />
            </TableCell>
            <TableCell className='Tcell'>
              <Dropdown names={status} Type={data[6]} />
            </TableCell>
            <TableCell className='Tcell'>
              <Dropdown names={Names} Type={data[7]} />
            </TableCell>
    </TableRow>
  );
};

export default TRow;
