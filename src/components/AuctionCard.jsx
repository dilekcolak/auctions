const AuctionCard = ({ auction }) => {
  return (
    <div className="auction-card">
      <div className="auction-status">
        <span className="status-indicator"></span>
      </div>

      <div className="auction-image">
        <img src={auction.image} alt="İhale Görseli" />
      </div>

      <div className="auction-details">
        <h3 className="auction-title">{auction.title}</h3>

        <div className="auction-info">
          <div className="auction-meta">
            <p className="auction-category">
              <i className="fa-solid fa-tags"></i>
              <span>{auction.category}</span>
            </p>
            <p className="auction-location">
              <i className="fa-solid fa-location-dot"></i>
              <span>{auction.location}</span>
            </p>
          </div>

          <div className="auction-price">
            <p className="starting-price">
              Başlangıç: <span>{auction.startingPrice} ₺</span>
            </p>
            <p className="current-bid">
              Güncel Teklif: <span>{auction.currentBid} ₺</span>
            </p>
          </div>

          <div className="auction-time">
            <p className="time-left">
              <i className="fa-solid fa-clock"></i>{" "}
              <span>{auction.timeLeft}</span>
            </p>
            <p className="bid-count">
              <i className="fa-solid fa-travel"></i>{" "}
              <span>{auction.bidCount}</span>
            </p>
          </div>
        </div>

        <div className="auction-auctions">
          <button
            className="btn-view-auction" //css kodu yok sonradan değiştirilecek bu buton
            onClick={() => console.log("İhaleyi incele:", auction.id)}
          >
            İhaleyi İncele
          </button>
          <button
            className="btn-quick-bid"
            onClick={() => console.log("hızlı teklif ver:", auction.id)}
          >
            Hızlı Teklif Ver {/*onCLick fonksiyonu daha sonra düzenlenecek */}
          </button>
        </div>
      </div>
    </div>
  );
};
export default AuctionCard;
