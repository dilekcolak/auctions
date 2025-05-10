const defaultOptions = [
  { value: "newest", label: "En Yeni" },
  { value: "closing-soon", label: "Yakında Kapanacak" },
  { value: "price-high", label: "Fiyat (Yüksek-Düşük)" },
  { value: "price-low", label: "Fiyat (Düşük-Yüksek)" },
];

const SortSelect = ({
  selectedSort,
  setSelectedSort,
  options = defaultOptions,
  openDropdown,
  setOpenDropdown,
}) => {
  const isOpen = openDropdown === "sort";

  const toggleDropdown = () => {
    setOpenDropdown(isOpen ? null : "sort");
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedSort(value);
    setOpenDropdown(null);
  };

  return (
    <select
      id="filterSort"
      className="filter-select"
      value={selectedSort}
      onChange={handleChange}
      onClick={toggleDropdown}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default SortSelect;
