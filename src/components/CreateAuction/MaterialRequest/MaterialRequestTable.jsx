import MaterialRequestRow from "./MaterialRequestRow";

const MaterialRequestTable = ({
  rows,
  onChange,
  onDelete,
  onEdit,
  onViewDetails,
  onDuplicate,
  onAddRow,
}) => {
  return (
    <div className="table-container">
      <table className="material-request-table">
        <thead>
          <tr>
            <th width="60">Sıra No</th>
            <th width="100">Talep No</th>
            <th width="110">Tarih</th>
            <th width="130">Sevk Yeri</th>
            <th>Ürün Adı</th>
            <th width="80">Miktar</th>
            <th width="80">Birim</th>
            <th>Ürün Özellikleri</th>
            <th>Kullanım Yeri</th>
            <th width="120">Ödeme Tipi</th>
            <th width="120">İşlemler</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row, index) => (
            <MaterialRequestRow
              key={row.id}
              index={index}
              row={row}
              onChange={onChange}
              onEdit={onEdit}
              onDelete={onDelete}
              onDuplicate={onDuplicate}
              onViewDetails={onViewDetails}
            />
          ))}
        </tbody>
      </table>

      <button type="button" className="add-row-btn" onClick={onAddRow}>
        <i className="fa-solid fa-plus"></i>Yeni Satır ekle
      </button>
    </div>
  );
};
export default MaterialRequestTable;
