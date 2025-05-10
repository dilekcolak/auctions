import { useState } from "react";
import AuctionBasicInfo from "./AuctionBasicInfo";
import AuctionCategorySelect from "./AuctionCategorySelect";
import AuctionFeatures from "./AuctionFeatures";

const AuctionSettingsForm = ({ onNext, onPrev, activeTab }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    features: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggleFeature = (value) => {
    setFormData((prev) => {
      const features = prev.features.includes(value)
        ? prev.features.filter((f) => f !== value)
        : [...prev.features, value];
      return { ...prev, features };
    });
  };

  return (
    <div
      className={`create-auction-tab-content ${
        activeTab === "auction-settings" ? "active" : ""
      }`}
    >
      <AuctionBasicInfo
        title={formData.title}
        description={formData.description}
        onChange={handleChange}
      />

      <AuctionCategorySelect
        category={formData.category}
        onChange={handleChange}
      />

      <AuctionFeatures
        selectedFeatures={formData.features}
        onToggle={handleToggleFeature}
      />

      <div className="form-navigation">
        <button
          type="button"
          className="nav-btn prev-tab"
          data-prev="material-request"
          onClick={onPrev}
        >
          <i className="fa-solid fa-arrow-left"></i>
          <span>Önceki: Malzeme Talep Formu</span>
        </button>

        <button
          type="button"
          className="nav-btn next-tab"
          data-next="bid-settings"
          onClick={onNext}
        >
          <span>Sonraki: Teklif Ayarları</span>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default AuctionSettingsForm;
