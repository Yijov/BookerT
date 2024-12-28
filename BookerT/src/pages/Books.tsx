import React, { useEffect, useState } from "react";
import { GET_BOOKS } from "../services";
import { Book } from "../models/Book";
import { IDTColumn } from "../components/DataTable/IDataTable";
import { DataTable, Text, Popover, Spinner } from "../components";
import { useTheme } from "../utils";
import { GET_BOOK } from "../services/Books";

const BooksPage: React.FC = () => {
  const [books, setbooks] = useState<Book[]>([]);
  const [loading, setloading] = useState<boolean>(false);

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
      accessor: "title",
      header: "Titulo",
      renderValue(_data, row) {
        return <BookNeme book={row as Book} />;
      },
      renderHeader(data) {
        return String(data).toUpperCase();
      },
    },
    {
      accessor: "publishDate",
      filter: true,
      header: "Publicación",
      renderValue(data) {
        return new Date(data).toLocaleDateString();
      },
      renderHeader(data) {
        return String(data).toUpperCase();
      },
    },
    {
      accessor: "description",
      header: "descripción",
      renderHeader(data) {
        return String(data).toUpperCase();
      },
    },
  ];

  const loadBooks = async () => {
    try {
        setloading(true);
        const data = await GET_BOOKS();
        setbooks(data);
        setloading(false);
    } catch (error) {
        setbooks([]);
        setloading(false);
    }
   
  };
  useEffect(() => {
    loadBooks();
  }, []);
  return (
    <DataTable
      title={"Books"}
      isLoading={loading}
      data={books}
      columns={columns}
      pageSize={10}
      onRefresh={loadBooks}
      crud
      filters={[
        {
          name: "odd ids",
          onFilter: (data) => Number(data.id) % 2 !== 0,
        },
      ]}
    />
  );
};

export default BooksPage;

const BookDetail: React.FC<{ bookId: number }> = ({ bookId }) => {

  const [loading, setloading] = useState<boolean>(false);

  const [book, setbook] = useState<Book | null>(null);
  const { APP_PRIMARY_COLOR, FONT_COLOR_RV } = useTheme();

  const loadBook = async () => {
    setloading(true);
    const data = await GET_BOOK(bookId);
    setbook(data);
    setloading(false);
  };
  useEffect(() => {
    loadBook();
  }, []);

  if(loading|| !book) return <Spinner size="ss"/>
  else
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        textWrap:"wrap",
        width: "200px",
        minHeight: "200px",
        padding: "8px",
        borderRadius: "4px",
        background: APP_PRIMARY_COLOR,
        color: FONT_COLOR_RV,
      }}
    >
      <p><strong>{book?.title}</strong></p>
      <p ><strong>Published:</strong> { new Date(book?.publishDate).toLocaleDateString()}</p>
      <p> <strong>Pages:</strong> {book?.pageCount} </p>
      <p> <strong>Description:</strong> {book?.description} </p>
      <p ><strong>Excerpt:</strong>   {book?.excerpt} </p>
    </div>
  );
};

const BookNeme: React.FC<{ book: Book }> = ({ book }) => {
  return (
    <Popover card={<BookDetail bookId={book.id} />}>
      <Text link={true} color="blue">
        {book.title.toUpperCase()}
      </Text>
    </Popover>
  );
};
