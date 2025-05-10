import { useState } from "react";
import MultiSelectFilter from "./MultiSelectFilter";
import SortSelect from "./SortSelect";

const AuctionFilters = ({
  onSearch,
  onReset,
  selectedProducts,
  setSelectedProducts,
  selectedLocations,
  setSelectedLocations,
  selectedSort,
  setSelectedSort,
  openDropdown,
  setOpenDropdown,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const allProducts = [
    // Backend ile değiştirilecek
    "Çimento",
    "Tuğla",
    "Bims",
    "Alçı",
    "Kereste",
    "Plywood",
    "Gaz Beton",
    "OSB",
    "Kireç",
    "Membran",
  ];

  const allLocations = [
    //Backend ile değiştirilecek
    "Ankara",
    "İstanbul",
    "İzmir",
    "Adana",
    "Konya",
    "Bursa",
    "Eskişehir",
    "Gaziantep",
    "Samsun",
    "Mersin",
  ];

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  const handleResetFilters = () => {
    setSearchTerm("");
    setSelectedProducts([]);
    setSelectedLocations([]);
    if (onReset) {
      onReset();
    }
    setOpenDropdown(null);
  };

  return (
    <div className="auctions-search-bar">
      <div className="search-filters">
        <input
          type="text"
          id="auction-search"
          placeholder="İhale ara..."
          className="auction-search-input"
          value={searchTerm}
          onChange={handleSearchChange}
        />

        <div className="filter-container">
          <MultiSelectFilter
            type="product"
            options={allProducts}
            selectedOptions={selectedProducts}
            setSelectedOptions={setSelectedProducts}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
          />

          <MultiSelectFilter
            type="location"
            options={allLocations}
            selectedOptions={selectedLocations}
            setSelectedOptions={setSelectedLocations}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
          />

          <SortSelect
            setSelectedSort={setSelectedSort}
            selectedSort={selectedSort}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
          />
        </div>
      </div>

      <button
        id="resetFilters"
        className="btn-reset"
        onClick={handleResetFilters}
      >
        Filtreleri Temizle
      </button>
    </div>
  );
};

export default AuctionFilters;
