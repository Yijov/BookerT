import { CSSProperties, ReactNode } from "react";

export interface IDTColumn{ 
    header:string;   
    accessor:string;
    filter?: boolean;
    renderValue?: (data: any, row:any) => ReactNode;   
    renderHeader?: (data: any) => ReactNode;   
}

export interface IDTFilters{  
    name:string
    onFilter: (data: any) => ReactNode;      
}
export interface IDataTeble{
    title:string
    data?:any[]
    columns?:IDTColumn[]
    pageSize?: 5 | 10 | 15 | 30 | 50 | 100
    filters?:IDTFilters[]
    width?: CSSProperties["width"]
    margin?: CSSProperties["margin"]
    isLoading?:boolean
    crud?:boolean
    onRefresh?:React.MouseEventHandler<SVGSVGElement> | undefined
}