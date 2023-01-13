// react:
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// components:
import Video from "../components/Video";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { trimString, generateRandomColor } from '../utils/utils'
import { SearchInput } from '../components/SearchInput'
import { Placeholders } from '../components/Placeholders'

// api:
import { createClient, searchProfiles, recommendProfiles, getPublications } from '../api'

export default function Explore() {
    const [profiles, setProfiles] = useState([])
    const [loadingState, setLoadingState] = useState('loading')
    const [searchString, setSearchString] = useState('')

    useEffect(() => {
        getRecommendedProfiles() 
    }, [])

    async function getRecommendedProfiles() {
        try {
        const urqlClient = await createClient()
        const response = await urqlClient.query(recommendProfiles).toPromise()
        const profileData = await Promise.all(response.data.recommendedProfiles.map(async profile => {
            
            // format profile & publications:
            const pub = await urqlClient.query(getPublications, { id: profile.id, limit: 1 }).toPromise()
            profile.publication = pub.data.publications.items[0]
            profile.backgroundColor = generateRandomColor()
            const picture = profile.picture
            if (picture && picture.original && picture.original.url) {
              if (picture.original.url.startsWith('ipfs://')) {
                let result = picture.original.url.substring(7, picture.original.url.length)
                profile.avatarUrl = `http://lens.infura-ipfs.io/ipfs/${result}`
              } else {
                profile.avatarUrl = profile.picture.original.url
              }
            }
            return profile
        }))
        setProfiles(profileData)
        setLoadingState('loaded')
        } catch (err) {
        console.log('ERROR: fetching recommended profiles: ', err)
        }
    }

    async function searchForProfile() {
        if (!searchString) return
        try {
        const urqlClient = await createClient()
        const response = await urqlClient.query(searchProfiles, {
            query: searchString, type: 'PROFILE'
        }).toPromise()
        const profileData = await Promise.all(response.data.search.items.map(async profile => {
            
            // format searched for profile:
            const pub = await urqlClient.query(getPublications, { id: profile.profileId, limit: 1 }).toPromise()
            profile.id = profile.profileId
            profile.backgroundColor = generateRandomColor()
            profile.publication = pub.data.publications.items[0]
            const picture = profile.picture
            if (picture && picture.original && picture.original.url) {
              if (picture.original.url.startsWith('ipfs://')) {
                let result = picture.original.url.substring(7, picture.original.url.length)
                profile.avatarUrl = `http://lens.infura-ipfs.io/ipfs/${result}`
              } else {
                profile.avatarUrl = profile.picture.original.url
              }
            }
            return profile
        }))

        console.log(profileData);
        setProfiles(profileData)
        } catch (err) {
        console.log('error searching profiles...', err)
        }
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            searchForProfile()
        }
    }
  
    return (
        <div className="h-screen bg-white">
            <div className="px-10 flex flex-col w-full h-screen items-center justify-center mx-auto">
                {/* Navbar */}
                <Navbar/>

                {/* Sidebar & Videos */}
                <div className="py-8 flex h-4/5 w-full rounded-md">
                    <div className="flex space-x-5 w-full h-full items-center justify-center mx-auto">
                        
                        {/* Sidebar */}
                        <Sidebar/>
                        
                        {/* Video section */}
                        <div className="flex-row h-full w-5/6 rounded-md">
                           <div className="">
                                {/* Search */}
                                <div>
                                    <SearchInput
                                    placeholder='Search'
                                    onChange={e => setSearchString(e.target.value)}
                                    value={searchString}
                                    onKeyDown={handleKeyDown}      
                                    />
                                    <button
                                    onClick={searchForProfile}
                                    buttonText="SEARCH PROFILES"
                                    />
                                </div>

                                {/* Profile data */}
                                <div className="flex flex-col justify-start">
                                    {
                                    loadingState === 'loading' && <Placeholders number={6} />
                                    }
                                    {
                                    profiles.map((profile, index) => (
                                        <Link to={`/explore/${profile.id}`} key={profile.id}>
                                        <a>
                                        <div className="background-white mt-3 border border-2 border-black p-3 shadow-md">
                                            <div className="md:flex">
                                                <div className="md:shrink-0">
                                                {profile.picture ? (
                                                    <img
                                                    src={profile.avatarUrl}
                                                    className="h-30 w-full object-cover md:h-full md:w-48"
                                                    />
                                                ) : (
                                                    <div
                                                    style={{
                                                        backgrondColor: "gray",
                                                    }}
                                                    className="h-30 w-full object-cover md:h-full md:w-48"
                                                    />
                                                )}
                                                </div>
                                                <div className="p-4">
                                                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                                                        {profile.handle}
                                                        {profile.name &&
                                                        " (" + profile.name + ")"}
                                                    </div>
                                                    <div className="mt-2 text-sm text-slate-900">{profile.ownedBy}</div>
                                                    <p className="mt-2 text-xs text-slate-500">
                                                        following: {profile.stats.totalFollowing} followers:{" "}
                                                        {profile.stats.totalFollowers}
                                                    </p>
                                                    <p className="mt-2 text-xs text-indigo-300">
                                                        Most recent publication:
                                                    </p>
                                                    <p className="text-xs text-black">
                                                        {trimString(profile.publication?.metadata.content, 200)}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        </a>
                                        </Link>
                                    ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
