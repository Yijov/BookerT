import React from 'react';
import { DTHeader } from './DTHeader';
import { IDTColumn } from '../../IDataTable';
export interface IDTHead {
  columns: IDTColumn[];
  sortData:any,
  crud?:boolean
  createFilter:(config: IDTColumn) => {
    options: any[];
    updatefilter: () => void;
    addFilter: (value: string) => void;
    removeFilter: (value: string) => void;
    isChecked: (value: string) => boolean;
  }
}
export const DTHead: React.FC<IDTHead> = ({ columns, createFilter , sortData, crud}) => {
  return (
    <thead>
      <tr>
        {columns.map((col, index) => (
          <DTHeader key={index} col={col} 
          createFilter={createFilter}
          sortData={sortData}
           />
        ))}
        {crud &&  <th>ACTIONS</th> }
        
      </tr>
    </thead>
  );
};
