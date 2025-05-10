import { useState } from "react";

const TabNavigation = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState("open-auctions");

  const handleClick = (tabId) => {
    setActiveTab(tabId);
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  return (
    <div className="tabs-nav">
      <button
        className={`tab-btn ${activeTab === "open-auctions" ? "active" : ""}`}
        data-tab="open-auctions"
        onClick={() => handleClick("open-auctions")}
      >
        Açık İhaleler
      </button>

      {/*open-auctions veya closed-auctions olarak ayrı css var mı bak!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}

      <button
        className={`tab-btn ${activeTab === "closed-auctions" ? "active" : ""}`}
        data-tab="closed-auctions"
        onClick={() => handleClick("closed-auctions")}
      >
        Kapalı İhaleler
      </button>
    </div>
  );
};

export default TabNavigation;
