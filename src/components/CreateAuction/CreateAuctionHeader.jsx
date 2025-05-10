const CreateAuctionHeader = ({ onClose }) => {
  return (
    <div className="create-auction-header">
      <h3>Yeni İhale Oluştur</h3>
      <button
        type="button"
        className="create-auction-close"
        aria-label="Kapat"
        title="Pencereyi Kapat"
        onClick={onClose}
      >
        &times;
      </button>
    </div>
  );
};
export default CreateAuctionHeader;
