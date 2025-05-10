const AuctionFormActions = ({
  onBack,
  onShowDrafts,
  onSaveDraft,
  onPublish,
}) => {
  return (
    <div className="auction-form-actions">
      <button type="button" className="btn-back" onClick={onBack}>
        Geri Dön
      </button>

      <div className="auction-action-btns">
        <button
          type="button"
          className="btn-show-drafts"
          onClick={onShowDrafts}
        >
          Taslakları Göster
        </button>
        <button type="button" className="btn-save-draft" onClick={onSaveDraft}>
          Taslak Olarak Kaydet
        </button>
        <button type="button" className="btn-publish" onClick={onPublish}>
          İhale Yayınla
        </button>
      </div>
    </div>
  );
};
export default AuctionFormActions;
