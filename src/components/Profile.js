import { trimString, generateRandomColor } from '../utils/utils'

export default function Profile(props) {
    const profile = props.profile;
    console.log(props);

    // Formats the users photos:
    const picture = profile.picture
            if (picture && picture.original && picture.original.url) {
              if (picture.original.url.startsWith('ipfs://')) {
                let result = picture.original.url.substring(7, picture.original.url.length)
                profile.avatarUrl = `http://lens.infura-ipfs.io/ipfs/${result}`
              } else {
                profile.avatarUrl = profile.picture.original.url
              }
            }

    return (
        <a>
         <div className="background-white border border-2 border-black shadow-md">
            <div className="md:flex">
                {profile?.coverPicture?.original?.url ? (
                        <img
                        src={profile?.coverPicture?.original?.url}
                        className="h-48 w-full object-cover"
                        />
                    ) : (
                        <div> </div>
                    )
                }
            </div>
        </div>
        <div className="background-white mt-3 border border-2 border-black p-3 shadow-md">
            <div className="md:flex">
                <div className="md:shrink-0">
                {profile?.picture ? (
                    <img
                    src={profile.avatarUrl}
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    />
                ) : (
                    <div
                    style={{
                        backgrondColor: "gray",
                    }}
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    />
                )}
                </div>
                <div className="p-4">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        {profile?.handle}
                        {profile?.name &&
                        " (" + profile?.name + ")"}
                    </div>
                    <div className="mt-2 text-xs text-slate-900">{profile?.ownedBy}</div>
                        <p className="mt-2 text-xs text-slate-500">
                            following: {profile?.stats?.totalFollowing} followers:{" "}
                            {profile?.stats?.totalFollowers}
                        </p>
                        <p className="mt-2 text-sm text-black">
                            {profile?.bio}
                        </p>
                    </div>
                </div>
            </div>
        </a>
    );
  }