//react:
import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

// api:
import {
    createClient,
    fetchProfile,
  } from '../api/index.js'

// views:
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Profile from '../components/Profile.js';

export default function ExploreProfile() {
    const [profile, setProfile] = useState([]);
    const [publications, setPublications] = useState([]);
    const [loadedState, setLoadedState] = useState('');

    const { id } =  useParams(); 

    useEffect(() => {
        console.log(id);
        if (id){
            getProfile() 
        }
    }, [id, profile]);
    
    async function getProfile() {

        console.log("id insie get profile", id)
        try {
            const {
              profile: profileData, publications: publicationData
            } = await fetchProfile(id)
            console.log("profiledata", profileData);
            setProfile(profileData)
            console.log(profile);
            setPublications(publicationData)
            setLoadedState('loaded')
          } catch (err) {
            console.log('error fetching profile...', err)
        }
    }

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
                        
                        {/* Profile section */}
                        <div className="flex-row h-full w-5/6 rounded-md">
                        <Profile profile={profile}/>

                        <div className="">
                            <h3 className="mt-4 text-lg font-semibold text-slate-900">Posts</h3>
                            <div className="flex flex-col justify-start">
                                {/* <div className="flex flex-row flex-wrap"> */}
                                {
                                    publications && publications.map((pub, index) => (
                                    <div className="background-white mt-3 border border-2 border-black p-3 shadow-md" key={index}>
                                        <ReactMarkdown>
                                        {pub.metadata.content}
                                        </ReactMarkdown>
                                    </div>
                                    ))
                                }
                                {/* {
                                    loadedState === 'loaded' && !publications.length && (
                                    <div className={emptyPostContainerStyle}>
                                        <p className={emptyPostTextStyle}>
                                        <span className={emptyPostHandleStyle}>{profile.handle}</span> has not posted yet!
                                        </p>
                                    </div>
                                    )
                                } */}
                                {/* </div> */}
                            </div>
                        </div>
                        {/* End of addition */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

