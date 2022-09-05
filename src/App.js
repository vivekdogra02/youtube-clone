import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  Navbar,
  Feed,
  SearchFeed,
  ChannelDetail,
  VideoDetail,
} from "./components";
import ScrollToTop from "./hooks/useScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <ScrollToTop>
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>
        </ScrollToTop>
      </Box>
    </BrowserRouter>
  );
}

export default App;
