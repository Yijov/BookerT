import { useState, useEffect } from "react";

export const usePagination = (data:any[], numberOfitemsPerPage: number, isLoading:boolean) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(0);

  const indexOfLastItem = currentPageNumber * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPage = isLoading ? [] :  data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages =isLoading ? 1 : Math.ceil(data.length / itemsPerPage);
  const emptyRowCount = isLoading? itemsPerPage:itemsPerPage - currentPage.length;
  const changePage = (pageNumber: number) => {
    setCurrentPageNumber(pageNumber);
  };

  useEffect(() => {
    setItemsPerPage(numberOfitemsPerPage)
  }, [data])
  
  return {
    currentPage,
    totalPages,
    currentPageNumber,
    changePage,
    emptyRowCount,
    itemsPerPage,
    setItemsPerPage,
  };
}
