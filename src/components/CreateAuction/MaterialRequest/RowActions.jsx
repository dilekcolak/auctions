const RowActions = ({
  onEdit,
  onDelete,
  onDuplicate,
  onViewDetails,
  isDraggable = true,
}) => {
  return (
    <td className="table-actions">
      <div className="primary-actions">
        {isDraggable && (
          <button
            type="button"
            className="table-action-btn drag-handle"
            title="Sürükle & Sırala"
          >
            <i className="fa-solid fa-grip-vertical"></i>
          </button>
        )}

        {onViewDetails && (
          <button
            type="button"
            className="table-action-btn details"
            title="Detayları Göster"
            onClick={onViewDetails}
          >
            <i className="fa-solid fa-eye"></i>
          </button>
        )}

        {onEdit && (
          <button
            type="button"
            className="table-action-btn edit"
            title="Düzenle"
            onClick={onEdit}
          >
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
        )}
      </div>
      <div className="secondary-actions">
        {onDuplicate && (
          <button
            type="button"
            className="table-action-btn duplicate"
            title="Çoğalt"
            onClick={onDuplicate}
          >
            <i className="fa-solid fa-copy"></i>
          </button>
        )}

        {onDelete && (
          <button
            type="button"
            className="table-action-btn delete"
            title="Sil"
            onClick={onDelete}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        )}
      </div>
    </td>
  );
};
export default RowActions;
