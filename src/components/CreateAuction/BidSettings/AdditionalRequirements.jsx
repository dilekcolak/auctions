const AdditionalRequirements = ({
  technicalSpecs,
  qualityStandards,
  onChange,
}) => {
  return (
    <div className="form-section">
      <h4>Diğer Gereksinimler</h4>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="technical_specs">Teknik Şartname</label>
          <textarea
            name="technicalSpecs"
            id="technical_specs"
            className="form-control textarea"
            placeholder="Teknik şartname detayları giriniz!"
            value={technicalSpecs}
            onChange={onChange}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="quality_standards">Kalite Standartları</label>
          <textarea
            id="quality_standards"
            name="qualityStandards"
            className="form-control textarea"
            placeholder="Kalite standartları detaylarını giriniz"
            value={qualityStandards}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};
export default AdditionalRequirements;
