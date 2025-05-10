const CeCertificateSelect = ({ value, onChange }) => {
  return (
    <div className="form-row">
      <div className="form-group">
        <label>CE Belgesi</label>
        <select
          className="form-control"
          id="ce_certificate"
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="required">Zorunlu</option>
          <option value="optional">İsteğe Bağlı</option>
          <option value="not_required">Gerekli Değil</option>
        </select>
      </div>
    </div>
  );
};
export default CeCertificateSelect;
