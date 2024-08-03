import React from 'react';
import { ImageList, ImageListItem } from '@mui/material';

const itemData = [
  { video: 'video1.mp4', title: 'Video 1' },
  { video: 'video2.mp4', title: 'Video 2' },
  { video: 'video3.mp4', title: 'Video 3' },
  { video: 'video4.mp4', title: 'Video 1' },
  { video: 'video1.mp4', title: 'Video 2' },
  { video: 'video2.mp4', title: 'Video 3' },
  
];

function Container4() {
  return (
    <div style={{ height: "650px", width: "100vw", backgroundColor: "black", marginTop: "20px" }}>
     
      <ImageList sx={{ width: "100vw", height: "100vh" }} cols={3} rowHeight={"250"}>
        {itemData.map((item) => (
          <ImageListItem key={item.video} style={{marginTop:20}} >
            <video
              src={item.video}
              alt={item.title}
              controls
              style={{ width: '100%', height: '100%' }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    
    </div>
  );
}

export default Container4;
