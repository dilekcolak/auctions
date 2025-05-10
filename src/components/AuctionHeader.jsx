const AuctionHeader = ({ onCreateAuction }) => {
  return (
    <div className="auctions-header">
      <h2>İhaleler</h2>
      <p>En güncel inşaat malzemeleri ihale fırsatları</p>

      <div className="create-auction-button-container">
        <button className="btn-create-auction" onClick={onCreateAuction}>
          <i className="fa-solid fa-plus"></i> İhale oluştur
        </button>
      </div>
    </div>
  );
};

export default AuctionHeader;
