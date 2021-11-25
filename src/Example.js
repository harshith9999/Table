import React from 'react';
import Table from './Table';

const Example = () => {
  const theadData = ['Name', 'Tags', 'Date','Amount','Tax','Remarks','Credited/Debited','By'];

  const tbodyData = [
    {
      id: '1',
      items: ['John', 'Naveen', '2017-05-24',100,6,'ntng','Credited','Charan'],
    },
    {
      id: '2',
      items: ['Joh', 'Naveen', '2021-01-01',100,5,'ntng','Credited','Charan'],
    },
    {
      id: '3',
      items: ['Jon', 'Naveen', '2021-01-07',100,7,'ntng','Credited','Charan'],

    },
  ];
  return (
    <div>
      <Table theadData={theadData} tbodyData={tbodyData} />
    </div>
  );
};

export default Example;
