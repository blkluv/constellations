// react:
import React, {useState, useEffect} from "react";
import { useHistory, useParams } from 'react-router-dom'

// components
import VideoPlayer from "./VideoPlayer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

// gql & apollo: 
import { gql, useQuery} from '@apollo/client';

export default function VideoContainer(){

  // Get passed video Id:
  const videoId = useParams(); 

  // Query the video from the the graph:
  const GET_SELECTED_VIDEO = gql`
  query video {
    videos(where: {id: "${videoId.id}"}) {
      id
      author
      category
      createdAt
      date
      description
      hash
      location
      thumbnailHash
      title
    }
  }
`;
  
  const {dataLoading, error, data} = useQuery(GET_SELECTED_VIDEO);

  if (dataLoading) return console.log("LOADING");

  if (error) {
      alert("Something went wrong. please try again.!", error.message);
      return console.log("ERROR: ", `${error.message}`);
  }
  console.log("THE DATA RETRIEVED IS: ", data);

  return (

    <>
     <div className="h-screen bg-white">
        <div class="px-10 flex flex-col w-full h-screen items-center justify-center mx-auto">
          {/* Navbar */}
          <Navbar/>

          {/* Sidebar & Videos */}
          <div class="py-8 flex h-4/5 w-full rounded-md">
            <div class="flex space-x-5 w-full h-full items-center justify-center mx-auto">
              
              {/* Sidebar */}
              <Sidebar/>
              
              {/* Video section */}
              <div className="flex-row h-full w-5/6 rounded-md">
                {data &&
                  data.videos.map((video) => (
                    <>
                    <div className="mx-10 h-full">
                      <h3 className="text-2xl dark:text-white">{video.title}</h3>
                      <p className="text-gray-500 mb-5 mt-1">
                        {video.category} • {" "}
                        {new Date(video.createdAt * 1000).toLocaleString("en-IN")}
                      </p>
                      <VideoPlayer className="w-full" title={video.title} hash={video.hash} thumbnailHash={video.thumbnailHash} />
                      <h3 className="mt-5 text-l dark:text-white">{video.description}</h3>
                    </div>
                    </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
{/* 
    <div>
      {data &&
        data.videos.map((video) => (
          <>
          <div className="box-content p-10">
            <div>
              <h3 className="text-2xl dark:text-white">{video.title}</h3>
              <p className="text-gray-500 mb-5 mt-1">
                {video.category} • {" "}
                {new Date(video.createdAt * 1000).toLocaleString("en-IN")}
              </p>
              <VideoPlayer className="aspect-video" title={video.title} hash={video.hash} thumbnailHash={video.thumbnailHash} />
              <h3 className="mt-5 text-xl dark:text-white">{video.description}</h3>
            </div>
          </div>
          </>
      ))}
    </div> */}
    </>
  );
}