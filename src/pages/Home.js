// react:
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// components:
import Video from "../components/Video";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

// graphql:
import { gql, useQuery} from '@apollo/client';


export default function Home() {

  // Query the videos from the graph:
  const GET_VIDEOS = gql`
    query videos(
      $first: Int
    ) {
      videos(
        first: $first
      ) {
        id
        hash
        title
        description
        location
        category
        thumbnailHash
        date
        author
        createdAt
      }
    }
  `;

  // Getting the Queried Videos:
  const {dataLoading, error, data} = useQuery(GET_VIDEOS);

  if (dataLoading) return console.log("LOADING");

  if (error) {
      alert("Something went wrong. please try again.!", error.message);
      return console.log("ERROR: ", `${error.message}`);
  }

  console.log(data)

  return (
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
              <div className="mt-0 flex h-full w-5/6 rounded-md">
                <div className="flex flex-col justify-start">
                  <div className="flex flex-row flex-wrap">
                      {data && 
                        data.videos.map((video) => (
                          <Link to={`/home/${video.id}`} key={video.id}>
                              <div className="w-80">
                                  <Video video={video}/>
                              </div>
                          </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
};
