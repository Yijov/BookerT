import { useState, useEffect } from "react"
import { IDTFilters } from "../../IDataTable"


export const useSpecialFilters = (data:any[], specialFinters: IDTFilters[]) => {
    const [sfdata, setSfData ]=useState<typeof data >([])
    const [options, setOptions ]=useState<IDTFilters["name"][]>([])
    const [filters, setFilters] = useState<(IDTFilters& {checked:boolean})[]>([]);

      const getSpecialFilter = () => {
        const updateData = () => {
          if (!(filters.some(f=> f.checked)) ) return setSfData(data);
          const activeFilters= filters.filter( f=> f.checked)
          setSfData(data.filter(d=> activeFilters.some(f=> f.onFilter(d) )))

        };
    
        const isChecked = (filterName: string) => {
          return filters.some(
            (f) => f.name === filterName && f.checked,
          );
        };
    
        const addFilter = (filterName: string) => {
          setFilters(filters.map(f=> f.name===filterName? {...f,  checked: true}: f));
        };
    
        const removeFilter = (filterName: string) => {
             setFilters(filters.map(f=> f.name===filterName? {...f,  checked: false}: f));
        };
        
        return { 
             options,
             updateData, 
             addFilter, 
             removeFilter, 
             isChecked 
            }
      };

    useEffect(() => {
        setSfData(data||[])
        setOptions(specialFinters.map(fil=> fil.name))
        setFilters(specialFinters.map(fil=>( {checked:false , ...fil})))
    }, [data])
    
  return (
    {sfdata, getSpecialFilter}
  )
}
