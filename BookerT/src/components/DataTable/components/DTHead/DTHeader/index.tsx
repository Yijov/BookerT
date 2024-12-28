import React from 'react'
import { IDTColumn } from '../../../IDataTable'
import { IDTHead } from '..'
import { FilterDropDown } from '../../../hooks/useFilterBy/FilterDropDown';
import { Icon } from '../../../..';

export interface IDTHeader  {

    col:IDTColumn;
    createFilter:IDTHead["createFilter"]
    sortData:IDTHead["sortData"]
}
export const DTHeader:React.FC<IDTHeader>= ({col, createFilter, sortData, }) => {
  const { options, updatefilter, addFilter, removeFilter, isChecked } =
  createFilter(col);

  
  return (
    <th>
    {col.renderHeader ? col.renderHeader(col.header) : col.header}
     <Icon disabled={!options.length} size={"clamp(12px, 1.2vw, 17px)"} name='sort' onClick={()=> sortData(col.accessor)}/>
      {col.filter &&<FilterDropDown
          options={options}
          updatefilter={updatefilter}
          addFilter={addFilter}
          removeFilter={removeFilter}
          isChecked={isChecked}
        /> }
        
  </th>

  )
}

