const ExcelActions = ({ onImport, onExport }) => {
  return (
    <div className="excel-actions">
      <button
        type="button"
        className="excel-btn excel-import-btn"
        onClick={onImport}
      >
        <i className="fa-solid fa-file-import"></i>Excel'den İçe Aktar
        <span
          className="excel-help-tip"
          data-tip="Uyumlu bir Excel dosyası seçerek tabloyu otomatik doldurabilirsiniz. Excel dosyanızda 'Talep No', 'Tarih', 'Sevk Yeri', 'Ürün Adı', 'Miktar', 'Birim', 'Ürün Özellikleri', 'Kullanım Yeri' ve 'Ödeme Tipi' sütunları olmalıdır."
        >
          ?
        </span>
      </button>

      <button
        type="button"
        className="excel-btn excel-export-btn"
        onClick={onExport}
      >
        <i className="fa-solid fa-file-export"></i> Excel'e Aktar
        <span
          className="excel-help-tip"
          data-tip="Mevcut tabloyu Excel dosyası olarak indirebilirsiniz. Dışa aktarılan Excel dosyası tarih ve saat bilgisi içeren bir isimle kaydedilecektir."
        >
          ?
        </span>
      </button>
    </div>
  );
};
export default ExcelActions;
