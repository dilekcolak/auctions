import { useState } from "react";

const typeMap = {
  product: {
    label: "Tüm Ürünler",
    placeholder: "Ürün Ara...",
    wrapperClass: "product-filter-wrapper",
  },

  location: {
    label: "Tüm Lokasyonlar",
    placeholder: "İl Ara...",
    wrapperClass: "location-filter-wrapper",
  },
};

const MultiSelectFilter = ({
  type, //"product" veya "location" olarak girilecek filtreleme için başka seçenekler eklenmek istenirse typeMap'e ekleme yaparak başka türler eklenebilir
  options,
  selectedOptions,
  setSelectedOptions,
  openDropdown,
  setOpenDropdown,
}) => {
  const [searchInput, setSearchInput] = useState("");

  const config = typeMap[type] || {};
  const isOpen = openDropdown === type;

  const toggleDropdown = () => setOpenDropdown(isOpen ? null : type);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchInput.toLowerCase())
  );

  const isSelected = (option) => selectedOptions.includes(option);

  const handleCheckBoxChange = (option) => {
    if (isSelected(option)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleSelectAll = () => {
    const toAdd = filteredOptions.filter((o) => !selectedOptions.includes(o));
    setSelectedOptions([...selectedOptions, ...toAdd]);
  };

  const handleClearAll = () => {
    setSelectedOptions(
      selectedOptions.filter((o) => !filteredOptions.includes(o))
    );
  };

  const handleApply = () => {
    setOpenDropdown(null);
  };

  return (
    <div className={`multi-select-wrapper ${config.wrapperClass}`}>
      <div className="multi-select-header" onClick={toggleDropdown}>
        <span
          className="multi-select-placeholder"
          style={{ display: selectedOptions.length === 0 ? "inline" : "none" }}
        >
          {config.label}
        </span>
        <span
          className="multi-select-selected-count"
          style={{ display: selectedOptions.length > 0 ? "inline" : "none" }}
        >
          {selectedOptions.length} ürün seçildi
        </span>
        <i className="fa-solid fa-chevron-down"></i>
      </div>

      {isOpen && (
        <div className="multi-select-dropdown">
          <div className="multi-select-search">
            <input
              type="text"
              placeholder={config.placeholder}
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <i className="fa-solid fa-search"></i>
          </div>

          <div className="multi-select-actions">
            <button onClick={handleSelectAll}>Tümünü Seç</button>
            <button onClick={handleClearAll}>Temizle</button>
          </div>

          <div className="multi-select-options">
            {filteredOptions.length === 0 ? (
              <p className="no-result">Sonuç Bulunamadı</p>
            ) : (
              filteredOptions.map((option) => {
                const checkBoxId = `${type}-${option
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")}`;
                return (
                  <div key={option} className="multi-select-option">
                    <input
                      type="checkbox"
                      id={checkBoxId}
                      checked={isSelected(option)}
                      onChange={() => handleCheckBoxChange(option)}
                    />
                    <label htmlFor={checkBoxId}>{option}</label>
                  </div>
                );
              })
            )}
          </div>

          <div className="multi-select-footer">
            <button onClick={handleApply}>Uygula</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default MultiSelectFilter;
