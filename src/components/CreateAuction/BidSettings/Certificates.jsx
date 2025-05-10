const Certificates = ({ title, options, selected, onToggle }) => {
  return (
    <div className="form-row">
      <div className="form-group">
        <label>{title}</label>
        <div className="checkbox-group">
          {options.map(({ id, label }) => (
            <div className="checkbox-item" key={id}>
              <input
                type="checkbox"
                id={id}
                value={id}
                checked={selected.includes(id)}
                onChange={() => onToggle(id)}
              />
              <label htmlFor={id}>{label}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Certificates;
