const AuctionBasicInfo = ({ title, description, onChange }) => {
  return (
    <div className="form-section">
      <h4>İhale Temel Bilgileri</h4>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="auction_title">İhale Başlığı *</label>
          <input
            type="text"
            name="title"
            className="form-control"
            placeholder="İhale başlığını giriniz!"
            value={title}
            onChange={onChange}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="auction_description">İhale Açıklaması *</label>
          <textarea
            name="description"
            className="form-control textarea"
            placeholder="İhale detaylarını giriniz!"
            value={description}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};
export default AuctionBasicInfo;
