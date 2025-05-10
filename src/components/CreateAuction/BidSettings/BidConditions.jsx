const conditions = [
  { id: "partial_bids", label: "Kısmi Tekliflere İzin Ver" },
  { id: "alternative_bids", label: "Alternatif Tekliflere İzin Ver" },
];

const BidConditions = ({ selectedConditions, onToggle }) => {
  return (
    <div className="form-row">
      <div className="form-group">
        <label>Teklif Detayları</label>
        <div className="checkbox-group">
          {conditions.map((condition) => (
            <div className="checkbox-item" key={condition.id}>
              <input
                type="checkbox"
                id={condition.id}
                name="bid_conditions[]"
                value={condition.id}
                checked={selectedConditions.includes(condition.id)}
                onChange={() => onToggle(condition.id)}
              />
              <label htmlFor={condition.id}>{condition.label}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default BidConditions;
