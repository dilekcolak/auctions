import { useState } from "react";

const DraftAuctionsModal = ({ isOpen, drafts = [], onClose, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDrafts = drafts.filter((draft) =>
    draft.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="draft-auctions-modal">
      <div className="draft-auctions-content">
        <button
          type="button"
          className="draft-auctions-close"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="draft-auctions-header">
          <h3>Taslak İhaleler</h3>
        </div>

        <div className="draft-auctions-body">
          <div className="draft-auctions-search">
            <input
              type="text"
              placeholder="Taslak ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <i className="fa-solid fa-search"></i>
          </div>

          <div className="draft-auctions-list">
            {filteredDrafts.length === 0 ? (
              <div className="no-drafts-message">
                <i className="fa-solid fa-file-circle-exclamation"></i>
                <p>Henüz kaydedilmiş taslak ihale bulunmamaktadır.</p>
              </div>
            ) : (
              filteredDrafts.map((draft) => (
                <div
                  key={draft.id}
                  className="draft-auction-item"
                  onClick={() => onSelect(draft)}
                >
                  <strong>{draft.title}</strong>
                  <p>{draft.description}</p>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="draft-auctions-footer">
          <button type="button" onClick={onClose}>
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
};
export default DraftAuctionsModal;
