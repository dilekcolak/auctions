import { useEffect, useState } from "react";
import AuctionCard from "./AuctionCard";
import Pagination from "./Pagination";

const ITEMS_PER_PAGE = 6;

const AuctionList = ({ type, auctions = [], loading }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(auctions.length / ITEMS_PER_PAGE);

  const paginatedAuctions = auctions.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  return (
    <div
      className={`tab-pane ${
        type === "open" || type === "closed" ? "active" : ""
      }`}
    >
      <div className="auctions-list">
        {loading ? (
          <div className="loading-auctions">
            <div className="spinner"></div>
            <p>İhaleler yükleniyor...</p>
          </div>
        ) : paginatedAuctions.length === 0 ? (
          <p className="no-auctions">Gösterilecek ihale bulunamadı!</p>
        ) : (
          paginatedAuctions.map((auction) => (
            <AuctionCard key={auction.id} auction={auction} />
          ))
        )}
      </div>

      <div className="auctions-pagination">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};
export default AuctionList;
