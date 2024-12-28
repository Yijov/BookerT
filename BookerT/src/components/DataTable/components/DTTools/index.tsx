import React, { useState } from "react";
import { Text, Icon, Tooltip, Button, Modal, TextInput } from "../../../../components";
import { printToExcel } from "../../../../utils/helpers/Print";
import { IDTColumn } from "../../IDataTable";
import { SpecialFilterDropDown } from "../../hooks/useSpecialFilters/SpecialFilterDropDown";
import { capitalizeFirstLetter } from "../../../../utils";
import { POST_BOOKS } from "../../../../services/Books";
export interface DTTools {
  title: string;
  data?: any[];
  page?: any[];
  crud?: boolean;
  columns: IDTColumn[];
  onRefresh?: React.MouseEventHandler<SVGSVGElement> | undefined;
  searchValue?: any;
  onSearch?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  getSpecialFilter: () => {
    options: string[];
    updateData: () => void;
    addFilter: (filterName: string) => void;
    removeFilter: (filterName: string) => void;
    isChecked: (filterName: string) => boolean;
  };
}
export const DTTools: React.FC<DTTools> = ({
  title,
  onRefresh,
  searchValue,
  page = [],
  columns = [],
  data = [],
  getSpecialFilter,
  onSearch,
  crud,
}) => {
  const [CreateModalVisible, setCreateModalVisible] = useState(false);
  const tableColumns = columns.map((c) => c.header);

  const { addFilter, isChecked, options, removeFilter, updateData } =
    getSpecialFilter();
  const showCreateModal = () => {
    setCreateModalVisible(true);
  };
  const hideCreateModal = () => {
    setCreateModalVisible(false);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "18px 0 8px 0",
        justifyContent: "space-between",
      }}
      className="ads-tools"
    >
      <Text type="sub_title" margin={"0 0 0.8rem 0rem"}>
        {title + " " + data?.length}
      </Text>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginRight: "3rem",
        }}
      >
        <Tooltip text="Excel de esta página">
          <Icon
            name="excel"
            color="green"
            border="squared"
            onClick={() => printToExcel(page, title, tableColumns)}
          />
        </Tooltip>
        <Tooltip text="Excel de esta tabla">
          <Icon
            name="excel"
            color="green"
            border="squared"
            onClick={() => printToExcel(data, title, tableColumns)}
          />
        </Tooltip>
        {crud && <Button onClick={showCreateModal}>Create</Button>}
        <input
          style={{ height: "60%", minWidth: "12rem", marginLeft: "3rem" }}
          placeholder={"Buscar en " + title}
          value={searchValue}
          onChange={onSearch}
          type="search"
        />
        <Tooltip text="Filtrar" disabled={!options.length}>
          <SpecialFilterDropDown
            addFilter={addFilter}
            isChecked={isChecked}
            options={options}
            removeFilter={removeFilter}
            updatefilter={updateData}
          />
        </Tooltip>

        <Tooltip text="Actualizar">
          <Icon name="refresh" border="squared" onClick={onRefresh} />
        </Tooltip>
      </div>
      {CreateModalVisible && <CreateteModal onClose={hideCreateModal} />}{" "}
    </div>
  );
};

const CreateteModal: React.FC<{ onClose: Function }> = ({ onClose }) => {
  const [confirmed, setConfirmed] = useState<boolean>(false);
  const [errored, seErrored] = useState<boolean>(false);
  const [item, setitem] = useState({
    title: "",
    description: "",
    pageCount: 0,
    excerpt: "",
    publishDate: "",
  });

  let arr = Object.entries(item);

  const hadleConfirm=async()=>{
    try {
      await POST_BOOKS({id:"",...item})
      setConfirmed(true)
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
    

  }
  return (
    <Modal title="Create Book" onClose={onClose}>
      <Text>Create a New Book </Text>
      {confirmed && <Text color="darkblue">{"Book Created"}</Text>}
      {(!confirmed && !errored) && arr.map((a:any, index) => (
        <TextInput
        key={index}
          label={capitalizeFirstLetter(a[0])}
          disabled={a[0] === "id"}
          //@ts-ignore
          value={item[a[0]]}
          onChange={(e) =>
  
            setitem({ ...item, [a[0]]: e.target.value })
          }
        />
      ))}

<       div style={{ marginTop: "2rem" }}>
              <Button onClick={() => onClose()} bgColor="darkred">
                Cancel{" "}
              </Button>
              <Button onClick={hadleConfirm}>Confirm</Button>
            </div>
            {errored && <Text color="darkred">{"Somithing went wrong"}</Text>}
    </Modal>
  );
};

