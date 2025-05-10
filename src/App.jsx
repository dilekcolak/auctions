import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateAuctionPage from "./pages/CreateAuctionPage";
import AuctionsPage from "./pages/AuctionsPage"; // örnek başka bir sayfa
import "./styles/auctions.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuctionsPage />} />
        <Route path="/create-auction" element={<CreateAuctionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
