import React from "react";
import { useState , useEffect } from "react"; 
import { Box  , Typography } from "@mui/material";
import  Videos  from "./Videos";
import { useParams } from "react-router-dom";
import { FetchFromAPI } from "../utils/FetchFromAPI";

const SearchFeed = () => {
    
    const [videos, setVideos] = useState(null);
    const { searchTerm } =useParams();
    
    useEffect(() => {
      setVideos(null);
  
      FetchFromAPI(`search?part=snippet&q=${searchTerm}`)
        .then((data) => setVideos(data.items))
      }, [searchTerm]);

    return(
              <Box p={2} sx={{overflowY : 'auto', height: "90vh" ,flex:  2 }}>
                  
                  <Typography variant="h4"
                  fontWeight= "bold" mb={2} 
                  sx={{ color: 'white' }}>
                     Search Results for :
                      &nbsp;  
                     <span style= {{color: "#F31503"}} >
                        {searchTerm}
                      </span>
                      &nbsp; 
                         videos
                  </Typography>

                  <Videos videos={videos}/>

              </Box>
        
        
    )
}

export default SearchFeed;




