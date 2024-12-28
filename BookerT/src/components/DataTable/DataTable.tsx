import React from 'react';
import { IDataTeble } from './IDataTable';
import { DTHead, DTBody } from './components';
import { Tile } from '..';
import { DTTools } from './components';
import { Pagination } from './components/Pagination';
import { usePagination } from './hooks/usePagination';
import { useSearchFilter } from './hooks/useSearchFilter';
import { useFilterBy } from './hooks/useFilterBy/useFilterBy';
import { useSpecialFilters } from './hooks/useSpecialFilters';
import { useSortBy } from './hooks/useSortby';
import './DataTable.css';

export const DataTable: React.FC<IDataTeble> = ({
  title,
  onRefresh,
  width,
  filters = [],
  data = [],
  columns = [],
  pageSize = 5,
  margin = '0',
  isLoading = false,
  crud
}) => {
  const { fdata, createFilter } = useFilterBy(data);
  const { sfdata, getSpecialFilter } = useSpecialFilters(fdata, filters);
  const { input, ndata, handleInput } = useSearchFilter(sfdata, columns);
  const { sortedData, sortData } = useSortBy(ndata);
  const { changePage, currentPage, totalPages, currentPageNumber, emptyRowCount } =
    usePagination(sortedData, pageSize, isLoading);

  return (
    <Tile style={{ padding: '1rem 1rem 0rem 1rem', margin, width }}>
      <DTTools
        title={title}
        data={sortedData}
        page={currentPage}
        columns={columns}
        onRefresh={onRefresh}
        searchValue={input}
        onSearch={handleInput}
        getSpecialFilter={getSpecialFilter}
        crud={crud}
      />
      <table className="ads-table">
        <DTHead columns={columns} createFilter={createFilter} sortData={sortData} crud={crud}/>
        <DTBody
          crud={crud}
          data={currentPage}
          columns={columns}
          emptyRows={emptyRowCount}
          isLoading={isLoading}
        />
      </table>
      <Pagination
        currentPageNumber={currentPageNumber}
        totalPages={totalPages}
        onChangePage={changePage}
      />
    </Tile>
  );
};
