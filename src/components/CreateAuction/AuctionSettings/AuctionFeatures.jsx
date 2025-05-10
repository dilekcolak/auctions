const featuresList = [
  { id: "urgent_auction", label: "Acil İhale", value: "urgent" },
  {
    id: "shipping_included",
    label: "Nakliye Dahil",
    value: "shipping_included",
  },
  {
    id: "shipping_excluded",
    label: "Nakliye Hariç",
    value: "shipping_excluded",
  },
  {
    id: "quality_cert_required",
    label: "Kalite Belge Sertifikası Zorunlu",
    value: "quality_cert_required",
  },
];

const AuctionFeatures = ({ selectedFeatures, onToggle }) => {
  return (
    <div className="form-section">
      <h4>İhale Özellikleri</h4>
      <div className="checkbox-group">
        {featuresList.map((feature) => (
          <div className="checkbox-item" key={feature.id}>
            <input
              type="checkbox"
              id={feature.id}
              checked={selectedFeatures.includes(feature.value)}
              onChange={() => onToggle(feature.value)}
            />
            <label htmlFor={feature.id}>{feature.value}</label>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AuctionFeatures;
