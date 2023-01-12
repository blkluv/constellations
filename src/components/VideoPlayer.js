import React from "react";
// import { useAsset } from "@livepeer/react";
// import Plyr from "plyr-react";
// import "plyr-react/plyr.css";
import { Player } from '@livepeer/react';


export default function VideoPlayer({ title, hash, thumbnailHash}) {
  
  return (    
    <Player
      title={title}
      playbackId={hash}
      poster={`https://ipfs.io/ipfs/${thumbnailHash}`}
      showPipButton
      priority
      aspectRatio="16to9"
      layout="fill"
    />
  );

}