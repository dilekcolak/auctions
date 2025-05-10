import { useState } from "react";
import ExcelActions from "./ExcelActions";
import MaterialRequestTable from "./MaterialRequestTable";
import MaterialDetailModal from "./MaterialDetailModal";

const MaterialRequestForm = ({ onNext, activeTab }) => {
  const [rows, setRows] = useState([{ id: Date.now() }]);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleImport = () => {
    console.log("Excel içe aktarma işlemi başlatıldı...");
    //excel import fonksiyonu
  };

  const handleExport = () => {
    console.log("Excel dışa aktarma işlemi başlatıldı...");
    //excel export fonksiyonu
  };

  const handleAddRow = () => {
    setRows([...rows, { id: Date.now() }]);
  };

  const handleRowChange = (index, updatedRow) => {
    const updatedRows = [...rows];
    updatedRows[index] = updatedRow;
    setRows(updatedRows);
  };

  const handleDeleteRow = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  const handleDuplicateRow = (index) => {
    const newRow = { ...rows[index], id: Date.now() };
    setRows([...rows.slice(0, index + 1), newRow, ...rows.slice(index + 1)]);
  };

  const handleViewDetails = (index) => {
    setSelectedRow(rows[index]);
  };

  const handleCloseModal = () => {
    setSelectedRow(null);
  };

  const handleEditRow = (index) => {
    console.log("Düzenleme başlatıldı:", rows[index]);
  };

  return (
    <div
      className={`create-auction-tab-content ${
        activeTab === "material-request" ? "active" : ""
      }`}
    >
      <ExcelActions onImport={handleImport} onExport={handleExport} />

      <MaterialRequestTable
        rows={rows}
        onChange={handleRowChange}
        onDelete={handleDeleteRow}
        onEdit={handleEditRow}
        onViewDetails={handleViewDetails}
        onDuplicate={handleDuplicateRow}
        onAddRow={handleAddRow}
      />

      {selectedRow && (
        <MaterialDetailModal row={selectedRow} onClose={handleCloseModal} />
      )}

      <div className="form-navigation">
        <button
          type="button"
          className="nav-btn next-tab"
          data-next="auction-settings"
          onClick={onNext}
        >
          <span>Sonraki: İhale Ayarları</span>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};
export default MaterialRequestForm;
