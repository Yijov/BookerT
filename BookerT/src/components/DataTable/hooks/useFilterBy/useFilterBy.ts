import  { useState , useEffect} from "react";
import { IDTColumn } from "../../IDataTable";


export const useFilterBy = (data: any[]) => {
    const [fdata, setFdata] = useState<any[]>([]);
    const [filters, setFilters] = useState<{ accessor: string; value: string }[]>(
      [],
    );
  
    const createFilter = (config: IDTColumn) => {
      const options = [...new Set(data.map((d) => d[config.accessor]))];
      const updatefilter = () => {
        if (filters.length < 1) return setFdata(data);
        setFdata(
          data.filter((data) =>
            filters.some((filter) => data[filter.accessor] === filter.value),
          ),
        );
      };
  
      const isChecked = (value: string) => {
        return filters.some(
          (f) => f.accessor === config.accessor && f.value === value,
        );
      };
  
      const addFilter = (value: string) => {
        setFilters([...filters, { accessor: config.accessor, value }]);
      };
  
      const removeFilter = (value: string) => {
        setFilters(
          filters.filter(
            (f) => !(f.accessor === config.accessor && f.value === value),
          ),
        );
      };
      return { options, updatefilter, addFilter, removeFilter, isChecked }
    };
    useEffect(() => {
      setFdata(data)
    }, [data])
    
  
    return { fdata, createFilter };
  };