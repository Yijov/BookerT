import React, { useEffect, useState } from "react";
import { GET_AUTHORS } from "../services";
import { IDTColumn } from "../components/DataTable/IDataTable";
import { DataTable } from "../components";
import { Author } from "../models/Author";

const AuthorsPage:React.FC = () => {

    const [books, setbooks] = useState<Author[]>([])
    const [loading, setloading] = useState<boolean>(false)
    const columns: IDTColumn[] = [
      {
        accessor: "id",
        header: "ID",
        filter: false,
        renderHeader(data) {
          return String(data).toUpperCase();
        },
      },
      {
        accessor: "firstName",
        header: "Name",
        renderHeader(data) {
          return String(data).toUpperCase();
        },
      },
      {
        accessor: "lastName",
        header: "Last Name>",
        renderHeader(data) {
          return String(data).toUpperCase();
        },
      },
    
    ];
   
  
  const loadAuthors= async()=>{
    setloading(true)
    const data = await GET_AUTHORS();
    setbooks(data);
    setloading(false)
  
  }
    useEffect(() => {
        loadAuthors() 
    }, [])
  return (
    <DataTable
    title={"Authors"}
    isLoading={loading}
    data={books}
    onRefresh={loadAuthors}
    columns={columns}
    pageSize={10}
    filters={[
      {
        name: "odd ids",
        onFilter: (data) => Number(data.id) % 2 !==0 ,
      },
    ]}
  />
  )
}

export default AuthorsPage