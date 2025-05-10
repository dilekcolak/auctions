import BidConditions from "./BidConditions";
import Certificates from "./Certificates";
import CeCertificateSelect from "./CeCertificateSelect";
import AdditionalRequirements from "./AdditionalRequirements";
import { useState } from "react";
import PartnershipOptions from "./PartnershipOptions";

const BidSettingsForm = ({ onPrev, activeTab }) => {
  const [formData, setFormData] = useState({
    bidConditions: [],
    partnershipOptions: [],
    isoCertificates: [],
    tseCertificates: [],
    ceCertificate: "",
    technicalSpecs: "",
    qualityStandards: "",
  });

  const handleToggle = (key, value) => {
    setFormData((prev) => {
      const list = prev[key];
      const updated = list.includes(value)
        ? list.filter((item) => item !== value)
        : [...list, value];
      return { ...prev, [key]: updated };
    });
  };

  const handleCeChange = (newValue) => {
    setFormData((prev) => ({
      ...prev,
      ceCertificate: newValue,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div
      className={`create-auction-tab-content ${
        activeTab === "bid-settings" ? "active" : ""
      }`}
    >
      <div className="form-section">
        <h4>Teklif Verme Koşulları</h4>
        <BidConditions
          selectedConditions={formData.bidConditions}
          onToggle={(value) => handleToggle("bidConditions", value)}
        />

        <PartnershipOptions
          selectedOptions={formData.partnershipOptions}
          onToggle={(value) => handleToggle("partnershipOptions", value)}
        />
      </div>

      <div className="form-section">
        <h4>Kalite ve Belge Gereksinimleri</h4>
        <Certificates
          label="ISO Belgesi"
          name="isoCertificates"
          selected={formData.isoCertificates}
          onToggle={(value) => handleToggle("isoCertificates", value)}
          options={[
            { id: "iso_9001", label: "ISO 9001" },
            { id: "iso_14001", label: "ISO 14001" },
            { id: "iso_45001", label: "ISO 45001" },
          ]}
        />

        <Certificates
          label="TSE Belgesi"
          name="tseCertificates"
          selected={formData.tseCertificates}
          onToggle={(value) => handleToggle("tseCertificates", value)}
          options={[
            { id: "tsek", label: "TSEK" },
            { id: "ts_en", label: "TS EN" },
            { id: "ts_iso", label: "TS ISO" },
          ]}
        />

        <CeCertificateSelect
          value={formData.ceCertificate}
          onChange={handleCeChange}
        />
      </div>

      <AdditionalRequirements
        technicalSpecs={formData.technicalSpecs}
        qualityStandards={formData.qualityStandards}
        onChange={handleInputChange}
      />

      <div className="form-navigation">
        <button
          type="button"
          className="nav-btn prev-tab"
          data-prev="auction-settings"
          onClick={onPrev}
        >
          <i className="fa-solid fa-arrow-left"></i>
          <span>Önceki: İhale Ayarları</span>
        </button>
      </div>
    </div>
  );
};
export default BidSettingsForm;
