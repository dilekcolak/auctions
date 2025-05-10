import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateAuctionHeader from "../components/CreateAuction/CreateAuctionHeader";
import CreateAuctionTabs from "../components/CreateAuction/CreateAuctionTabs";
import MaterialRequestForm from "../components/CreateAuction/MaterialRequest/MaterialRequestForm";
import AuctionSettingsForm from "../components/CreateAuction/AuctionSettings/AuctionSettingsForm";
import BidSettingsForm from "../components/CreateAuction/BidSettings/BidSettingsForm";
import AuctionFormActions from "../components/CreateAuction/AuctionFormActions";
import DraftAuctionsModal from "../components/CreateAuction/DraftAuctionsModal";

const CreateAuctionPage = () => {
  const [activeTab, setActiveTab] = useState("material-request");
  const [isDraftModalOpen, setIsDraftModalOpen] = useState(false);
  const [drafts] = useState([]); //setDrafts şuanlık kullanılmadığı için yazmadım

  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  };

  const handleBack = () => {
    navigate("/");
  };

  const handleSaveDraft = () => {
    console.log("Taslak kaydetme işlemi başlatıldı");
  };
  const handlePublish = () => {
    console.log("İhale yayınlama işlemi başlatıldı");
    // buraya form verilerini toplayıp API'ye gönderme işlemini ekleyeceksin
  };
  const handleNext = () => {
    if (activeTab === "material-request") {
      setActiveTab("auction-settings");
    } else if (activeTab === "auction-settings") {
      setActiveTab("bid-settings");
    }
  };

  const handlePrev = () => {
    if (activeTab === "bid-settings") setActiveTab("auction-settings");
    else if (activeTab === "auction-settings") setActiveTab("material-request");
  };

  const handleShowDrafts = () => setIsDraftModalOpen(true);
  const handleCloseDrafts = () => setIsDraftModalOpen(false);

  const handleSelectDraft = (draft) => {
    console.log("Seçilen taslak:", draft);
    setIsDraftModalOpen(false);
  };

  return (
    <div className="create-auction-container">
      <CreateAuctionHeader onClose={handleClose} />
      <CreateAuctionTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="create-auction-tab-contents">
        {activeTab === "material-request" && (
          <MaterialRequestForm onNext={handleNext} activeTab={activeTab} />
        )}
        {activeTab === "auction-settings" && (
          <AuctionSettingsForm
            onNext={handleNext}
            onPrev={handlePrev}
            activeTab={activeTab}
          />
        )}
        {activeTab === "bid-settings" && (
          <BidSettingsForm onPrev={handlePrev} activeTab={activeTab} />
        )}
      </div>

      <AuctionFormActions
        onBack={handleBack}
        onShowDrafts={handleShowDrafts}
        onSaveDraft={handleSaveDraft}
        onPublish={handlePublish}
      />

      <DraftAuctionsModal
        isOpen={isDraftModalOpen}
        drafts={drafts}
        onClose={handleCloseDrafts}
        onSelect={handleSelectDraft}
      />
    </div>
  );
};
export default CreateAuctionPage;
