import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AuctionsPage from "./pages/AuctionsPage";
import "./styles/auctions.css"; // stil dosyasını da dahil et

function App() {
  return (
    <Router>
      <Routes>
        {/* Ana sayfayı otomatik /auctions'a yönlendir */}
        <Route path="/" element={<Navigate to="/auctions" replace />} />

        {/* AuctionsPage */}
        <Route path="/auctions" element={<AuctionsPage />} />

        {/* (İleride) /auctions/:id için detay sayfası eklenebilir */}
      </Routes>
    </Router>
  );
}

export default App;
