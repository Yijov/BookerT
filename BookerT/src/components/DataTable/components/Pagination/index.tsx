import React from 'react'
import { Icon,Text } from '../../../../components'
export interface IPagination{
    currentPageNumber:number
    totalPages:number
    onChangePage:(pageNumber: number) => void

}
export const Pagination:React.FC<IPagination> = ({currentPageNumber, totalPages, onChangePage}) => {
  return (
    <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding:"8px",
      gap: '10px'
    }}
  >
    <Icon
      name="caret-left"
      border="squared"
      disabled={currentPageNumber < 2}
      onClick={() => onChangePage(currentPageNumber - 1)}
    />
    <Text>
      {currentPageNumber}/{totalPages}
    </Text>
    <Icon
      name="caret-right"
      border="squared"
      disabled={currentPageNumber >= totalPages}
      onClick={() => onChangePage(currentPageNumber + 1)}
    />
  </div>
  )
}
