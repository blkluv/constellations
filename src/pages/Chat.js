// react:
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// components:
import Video from "../components/Video";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

// graphql:
import { gql, useQuery} from '@apollo/client';


export default function Chat() {

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
                        <div className="flex-row h-full w-5/6 rounded-md">
                            <p>CHAT PAGE</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
