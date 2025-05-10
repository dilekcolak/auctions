const TABS = [
  { id: "material-request", label: "1. Malzeme Talep Formu" },
  { id: "auction-settings", label: "2. İhale Ayarları" },
  { id: "bid-settings", label: "3. Teklif Ayarları" },
];

const CreateAuctionTabs = ({ activeTab }) => {
  return (
    <div className="create-auction-tabs">
      {TABS.map((tab) => (
        <div
          key={tab.id}
          className={`create-auction-tab ${
            activeTab === tab.id ? "active" : ""
          }`}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
};
export default CreateAuctionTabs;
