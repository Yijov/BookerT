import { useEffect, useState } from "react";

export const useSortBy = (data: any[]) => {
    const [sortBy, setSortBy] = useState<string>("id");
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
    const [sortedData, setSortedData] = useState<any[]>([]);
  
    const sortData = (column: string) => {
      if (column === sortBy) {
        setSortDirection(sortDirection === "asc" ? "desc" : "asc");
      } else {
        setSortBy(column);
        setSortDirection("asc");
      }
    };


    useEffect(() => {
        setSortedData(data)
    }, [data])
    useEffect(() => {
        setSortedData( [...sortedData].sort((a, b) => {
            const comparison = a[sortBy] > b[sortBy]? 1:-1;
            return sortDirection === "asc" ? comparison : -comparison;
          }))
    }, [sortDirection, sortBy])
  
    return { sortData, sortedData};
  };