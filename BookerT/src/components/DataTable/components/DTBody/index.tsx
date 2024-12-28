import React, {  useState } from "react";
import { IDTColumn } from "../../IDataTable";
import { DTData } from "./IDTData";
import {
  Icon,
  Spinner,
  Modal,
  Text,
  Button,
  TextInput,
} from "../../../../components";
import { DELETE_BOOK, GET_BOOK, PUT_BOOK, PutBookRequest } from "../../../../services/Books";
import { createPortal } from "react-dom";
import { AxiosResponse } from "axios";
import { Book } from "../../../../models/Book";
import { capitalizeFirstLetter } from "../../../../utils";
export interface IDTBody {
  data: any[];
  columns: IDTColumn[];
  emptyRows: number;
  isLoading: boolean;
  crud?: boolean;
}

export const DTBody: React.FC<IDTBody> = ({
  data,
  columns,
  emptyRows,
  isLoading,
  crud,
}) => {
  const [EditModalVisible, seEditModalVisible] = useState<boolean>(false);
  const [DeleteModalVisible, seDeleteModalVisible] = useState<boolean>(false);
  const [currentItem, setCurrentItem] = useState<any>(0);
  const tableIsEmpty = data.length <= 1;
  const ToggleEditModal =async (item?: any) => {
    if(item){
    const book=  await  GET_BOOK(item.id)
    setCurrentItem(book);
    } 
   
    seEditModalVisible(!EditModalVisible);
  };
  const ToggleDeleteModal = (item?: any) => {
    setCurrentItem(item);
    seDeleteModalVisible(!DeleteModalVisible);
  };
  return (
    <tbody>
      {!isLoading &&
        data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col, index) => (
              <DTData key={index} column={col} data={row} />
            ))}

            <td>
              {crud && (
                <>
                  <Icon name="edit" onClick={() => ToggleEditModal(row)} />{" "}
                  <Icon
                    name="trash"
                    onClick={() => ToggleDeleteModal(row)}
                    color="darkred"
                  />
                </>
              )}
            </td>
          </tr>
        ))}
      {/* fil empty rows when page is not complete */}

      {[...Array(emptyRows)].map((_, index) => (
        <tr className="dl-tr" key={`empty-${index}`} style={{ border: "none" }}>
          <td
            className="ads-td ads-td-empty"
            colSpan={columns.length}
            style={{ border: "none" }}
          >
            {isLoading &&
              tableIsEmpty &&
              Math.round(emptyRows / 2) === index + 1 && <Spinner size="s" />}
            {!isLoading &&
              tableIsEmpty &&
              Math.round(emptyRows / 2) === index &&
              "No Data"}
            {!isLoading &&
              tableIsEmpty &&
              Math.round(emptyRows / 2) === index + 1 && <Icon name="ban" />}
          </td>
        </tr>
      ))}
      {EditModalVisible &&
        createPortal(
          <ActionModal
            title={"Edit Book"}
            Body={EditionBody}
            failMessage="Something went wrong"
            confirmMessage="Changes applyed"
            item={currentItem}
            onClose={ToggleEditModal}
            onConfirm={PUT_BOOK}
            onEditChange={setCurrentItem}
          />,
          document.body,
          "portal"
        )}
      {DeleteModalVisible &&
        createPortal(
          <ActionModal
            title={"Delete Book"}
            failMessage="Something went wrong"
            confirmMessage="Book Deleted"
            item={currentItem}
            onClose={ToggleDeleteModal}
            Body={DeletionBody}
            onConfirm={DELETE_BOOK}
          />,
          document.body,
          "portal"
        )}
    </tbody>
  );
};

const ActionModal: React.FC<{
  title: string;
  confirmMessage: string;
  failMessage: string;
  onClose: Function;
  Body: React.FC<{ item?: any ; setCurrentItem?: React.Dispatch<any> }>;
  onConfirm:  (request: PutBookRequest) => Promise<AxiosResponse<any, any>> |  Promise<Book>;
  item: any;
  onEditChange?: React.Dispatch<any>
}> = ({
  onClose,
  item,
  title,
  onConfirm,
  confirmMessage,
  failMessage,
  Body,
  onEditChange
}) => {
  const [confirmed, setConfirmed] = useState<boolean>(false);
  const [errored, seErrored] = useState<boolean>(false);
 
  const hadleConfirm = async () => {
    try {
      await onConfirm(item);
      setConfirmed(true);
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (error) {
      seErrored(true);
      console.error(error);
      setTimeout(() => {
        onClose();
      }, 3000);
    }
  };

 
  return (
    <Modal title={title} onClose={onClose}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "2rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {confirmed && <Text color="darkblue">{confirmMessage}</Text>}
        {!confirmed && !errored && (
          <>
            {" "}
            <Body item={item} setCurrentItem={onEditChange}/>
            <div style={{ marginTop: "2rem" }}>
              <Button onClick={() => onClose()} bgColor="darkred">
                Cancel{" "}
              </Button>
              <Button onClick={hadleConfirm}>Confirm</Button>
            </div>
          </>
        )}
      </div>
      {errored && <Text color="darkred">{failMessage}</Text>}
    </Modal>
  );
};

const DeletionBody: React.FC = () => {
  return (
    <>
      <Icon name="trash" color="darkred" />
      <Text>Are you sure you want to Delete this Book?</Text>
    </>
  );
};

const EditionBody: React.FC<{ item?: any;  setCurrentItem?: React.Dispatch<any>}> = ({ item, setCurrentItem }) => {
  let arr = Object.entries(item);
 

  return (
    <>
      <Icon name="edit" />
      <Text>Editing Book {item.title} </Text>
      {arr.map((a, index) => (
        <TextInput
        key={index}
          label={capitalizeFirstLetter(a[0])}
          disabled={a[0] === "id"}
          value={item[a[0]]}
          onChange={(e) => setCurrentItem && setCurrentItem({...item, [a[0]]:e.target.value})}
        />
      ))}
    </>
  );
};
