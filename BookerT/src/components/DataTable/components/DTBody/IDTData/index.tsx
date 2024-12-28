import React from 'react'
import { IDTColumn } from '../../../IDataTable';

export interface IDTData {
  column:IDTColumn;
  data:any;
 
}
export const DTData:React.FC<IDTData> = ({column, data}) => {
  return (

      <td>
        {column.renderValue
          ? column.renderValue(data[column.accessor], data)
          : data[column.accessor]}
      </td>
  )
}
