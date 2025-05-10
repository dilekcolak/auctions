import { useEffect, useState } from "react";
import AuctionHeader from "../components/AuctionHeader";
import TabNavigation from "../components/TabNavigation";
import { dummyAuctions } from "../data/dummyAuctions";
import AuctionFilters from "../components/AuctionFilters";
import AuctionList from "../components/AuctionList";

const AuctionsPage = () => {
  const [activeTab, setActiveTab] = useState("open-auctions");
  const [loading, setLoading] = useState(true);
  const [filteredAuctions, setFilteredAuctions] = useState([]);

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedSort, setSelectedSort] = useState("newest");
  const [searchTerm, setSearchTerm] = useState("");

  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setFilteredAuctions(dummyAuctions);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const filtered = dummyAuctions
      .filter((auction) => {
        const productMatch =
          selectedProducts.length === 0 ||
          selectedProducts.includes(auction.category);

        const locationMatch =
          selectedLocations.length === 0 ||
          selectedLocations.includes(auction.location);

        const searchMatch = auction.title
          .toLowerCase()
          .split(" ")
          .some((word) => word.startsWith(searchTerm.toLowerCase()));

        return productMatch && locationMatch && searchMatch;
      })
      .sort((a, b) => {
        switch (selectedSort) {
          case "newest":
            return b.id - a.id;
          case "price-high":
            return b.currentBid - a.currentBid;
          case "price-low":
            return a.currentBid - a.currentBid;
          default:
            return 0;
        }
      });

    setFilteredAuctions(filtered);
  }, [selectedProducts, selectedLocations, selectedSort, searchTerm]);

  const handleTabChange = (tabId) => {
    console.log("Seçilen sekme:", tabId);
    setActiveTab(tabId);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleResetFilters = () => {
    setSelectedProducts([]);
    setSelectedLocations([]);
    setSearchTerm("");
    setSelectedSort("newest");
  };

  const openAuctions = filteredAuctions.filter((a) => a.status === "open");
  const closedAuctions = filteredAuctions.filter((a) => a.status === "closed");

  const handleCreateAuction = () => {
    console.log("ihale oluştur butonuna tıklandı"); //createAuction yazıldıktan sonra değiştirilecek
  };

  return (
    <div className="auctions-container">
      <AuctionHeader onCreateAuction={handleCreateAuction} />

      <div className="auctions-tabs">
        <TabNavigation onTabChange={handleTabChange} />
        <AuctionFilters
          onSearch={handleSearch}
          onReset={handleResetFilters}
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
          selectedLocations={selectedLocations}
          setSelectedLocations={setSelectedLocations}
          selectedSort={selectedSort}
          setSelectedSort={setSelectedSort}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
        />

        <div className="tab-content">
          {activeTab === "open-auctions" && (
            <AuctionList
              type="open"
              auctions={openAuctions}
              loading={loading}
            />
          )}

          {activeTab === "closed-auctions" && (
            <AuctionList
              type="closed"
              auctions={closedAuctions}
              loading={loading}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuctionsPage;
