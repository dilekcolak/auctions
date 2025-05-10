const options = [
  { id: "consortium_bids", label: "Konsorsiyum Tekliflerine İzin Ver" },
  { id: "subcontractor", label: "Alt Yüklenici Kullanımına İzin Ver" },
];

const PartnershipOptions = ({ selectedOptions, onToggle }) => {
  return (
    <div className="form-row">
      <div className="form-group">
        <label>İş Ortaklığı</label>
        <div className="checkbox-group">
          {options.map((option) => (
            <div className="checkbox-item" key={option.id}>
              <input
                type="checkbox"
                id={option.id}
                name="bid_conditions[]"
                value={option.id}
                checked={selectedOptions.includes(option.id)}
                onChange={() => onToggle(option.id)}
              />
              <label htmlFor={option.id}>{option.label}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PartnershipOptions;
