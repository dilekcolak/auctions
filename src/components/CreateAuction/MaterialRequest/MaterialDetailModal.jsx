const MaterialDetailModal = ({ data, isOpen, onClose }) => {
  if (!isOpen || !data) return null;

  return (
    <div className="material-details-modal">
      <div className="material-details-content">
        <button
          type="button"
          className="material-details-close"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="material-details-header">
          <h3>Malzeme Detayları</h3>
        </div>

        <div className="material-details-body">
          <div className="material-details-item">
            <label>Talep No:</label>
            <p>{data.request_no || "-"}</p>
          </div>
          <div className="material-details-item">
            <label>Tarih:</label>
            <p>{data.date || "-"}</p>
          </div>
          <div className="material-details-item">
            <label>Sevk Yeri:</label>
            <p>{data.location || "-"}</p>
          </div>
          <div className="material-details-item">
            <label>Ürün Adı:</label>
            <p>{data.product_name || "-"}</p>
          </div>
          <div className="material-details-item">
            <label>Miktar:</label>
            <p>{data.quantity || "-"}</p>
          </div>
          <div className="material-details-item">
            <label>Birim:</label>
            <p>{data.unit || "-"}</p>
          </div>
          <div className="material-details-item full-width">
            <label>Ürün Özellikleri:</label>
            <p>{data.product_specs || "-"}</p>
          </div>
          <div className="material-details-item full-width">
            <label>Kullanım Yeri:</label>
            <p>{data.usage_area || "-"}</p>
          </div>
          <div className="material-details-item">
            <label>Ödeme Tipi:</label>
            <p>{data.payment_type || "-"}</p>
          </div>
          <div className="material-details-item">
            <label>Sıra No:</label>
            <p>{data.index + 1}</p>
          </div>
        </div>

        <div className="materail-details-footer">
          <button type="button" onClick={onClose}>
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
};
export default MaterialDetailModal;
