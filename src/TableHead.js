import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import './App.css';



const TableHeadItem = ({ item }) => {
  return <TableCell className='Tcell' title={item}>{item}</TableCell>;
};

export default TableHeadItem;
