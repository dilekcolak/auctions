const AuctionCategorySelect = ({ category, onChange }) => {
  return (
    <div className="form-section">
      <h4>İhale Kategorisi *</h4>
      <div className="form-row">
        <div className="form-group">
          <select
            name="category"
            id="auction_category"
            className="form-control"
            value={category}
            onChange={onChange}
          >
            <option value="">Kategori Seçiniz</option>
            <option value="construction_materials">İnşaat Malzemeleri</option>
            <option value="electrical_materials">Elektrik Malzemeleri</option>
            <option value="mechanical_materials">Mekanik Malzemeleri</option>
            <option value="insulation_materials">Mantolama Malzemeleri</option>
            <option value="hardware_materials">Hırdavat & Nalbur</option>
            <option value="other">Diğer</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default AuctionCategorySelect;
