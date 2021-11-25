import React from 'react';
import TRow from './TableRow';
import TableHeadItem from './TableHead';
import MaUTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import './App.css';


const Table = ({theadData, tbodyData}) => {
  return (
    <MaUTable className="Table">
      <TableHead className="Thead">
        <TableRow >
          {theadData.map((h) => {
            return <TableHeadItem className='Tcell' key={h} item={h} />;
          })}
        </TableRow>
      </TableHead>
      <TableBody>
         {tbodyData.map((item) => {
         return  <TRow 
         key={item.id} data={item.items}
          />
        })}

      </TableBody>
    </MaUTable>
  );
};

export default Table;
