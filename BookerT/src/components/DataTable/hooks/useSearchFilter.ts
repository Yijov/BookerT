import { useEffect, useState } from "react";
import { IDTColumn } from "../IDataTable";

export const useSearchFilter = (
    data: any[],
    columns:IDTColumn[]
  ) => {
    const [input, setinput] = useState<string | number | readonly string[] | undefined>("");
    const [ndata, setNdata] = useState<any[]>([]);
    const curatedData= curateData(data,columns)
    const search= new RegExp(String(input), "ig")
    const handleInput=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setinput(e.target.value);
  }

  useEffect(() => {
    setNdata(input? curatedData.filter((d) => hasMatchingPropValue(d, search)):curatedData)
  }, [data, input])
  
    return { ndata, input, handleInput };
  };
  
function hasMatchingPropValue(obj: Record<string, any>, regex: RegExp): boolean {
    return Object.values(obj).some(value => regex.test(String(value))
    );
  }
function curateData(data: any[], columns:IDTColumn[]){
  const curated= data.map( d=> {
    let object= {}
    columns.forEach(c=>Object.assign(object,{ [c.accessor]: d[c.accessor]}))
    return object
  })
  return curated

}

