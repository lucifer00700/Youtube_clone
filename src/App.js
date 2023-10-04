// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import ChannelDetail from './components/ChannelDetail';
import VideoDetail from './components/VideoDetail';
import SearchFeed from './components/SearchFeed';

function App() {
  return (
  <BrowserRouter>
     <Box sx= {{ backgroundColor: '#000'}}>
         <Navbar />
         <Routes>
            <Route exact path='/' element={<Feed/>} />
            <Route path="/video/:id" element={<VideoDetail/>} />
            <Route path="/channel/:id" element={<ChannelDetail/>} />
            <Route path="/search/:searchTerm" element={<SearchFeed/>} />
         </Routes>
     </Box>
  </BrowserRouter>
  );
}

export default App;

