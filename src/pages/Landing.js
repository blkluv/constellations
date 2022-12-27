// import logo from './logo.svg';
// import './Landing.css';

function Landing() {
  return (
    <div className="Landing">
        <section className="relative w-full h-auto bg-black tails-selected-element" data-tails-scripts="//unpkg.com/alpinejs" contenteditable="true">
            <div className="relative z-40 h-full px-10 mx-auto max-w-7xl">

                <nav x-data="{ mobile: false }" className="relative z-40 flex items-center justify-between h-24 mx-auto md:px-0 lg:px-10 max-w-7xl">
                    <div className="relative z-20 flex items-center justify-between w-full md:w-auto">
                        <div>
                            <a href="#_" className="text-lg font-semibold text-white md:text-xl">
                                </a><a href="#_" className="flex items-center font-bold text-white lg:w-auto title-font lg:items-center lg:justify-center md:mb-0">
                                    <span className="text-xl leading-none select-none">constellations<span className="text-yellow-300">.</span></span>
                                </a>
                            
                        </div>
                    </div>

                    <div className="absolute z-20 flex-col justify-center hidden pr-5 mt-4 space-y-8 md:flex md:relative md:pr-3 lg:pr-0 md:flex-row md:space-y-0 md:items-center md:space-x-6 md:mt-0">
                        <a href="#_" className="flex-shrink-0 w-auto text-base font-semibold leading-5 text-left text-gray-200 capitalize bg-transparent rounded-lg md:text-sm md:py-3 md:px-6 md:font-medium md:text-center md:text-white md:bg-gray-900 md:mx-0">
                            Sign up
                        </a>
                    </div>
                </nav>

                <div className="flex flex-col items-center justify-center w-full h-full py-32 -mt-20 sm:py-48 md:py-64">
                    <h1 className="mb-20 text-4xl font-bold leading-tight text-left text-white sm:text-center lg:text-7xl lg:leading-tight">Build your creator universe by <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-red-400 to-pink-400">sharing, creating &</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-red-400 to-yellow-300">monetizing</span><br></br> your content.</h1>
                    <a href="#_" className="relative w-full group sm:w-auto">
                        <span className="absolute top-0 left-0 w-full h-full text-transparent border-2 border-white rounded">Start Livestreaming Today</span>
                        <span className="px-8 inline-block bg-gradient-to-br sm:w-auto w-full text-center from-yellow-200 font-semibold via-red-300 to-pink-400 relative transition-all ease-linear duration-150 transform group-hover:-translate-y-1.5 group-hover:translate-x-1.5 -translate-y-2.5 text-lg rounded translate-x-2 py-4">Start Live streaming Today!</span>
                    </a>
                    <p className="flex items-center mt-4 text-xs text-gray-400">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                        <span>Free to Try. Constellations is a work in progress.</span>
                    </p>
                </div>
            </div>
            <img alt="" className="absolute bottom-0 left-0 object-cover w-full" src="http://devdojo.com.s3.us-east-1.amazonaws.com/tails/images/mesh-bg.svg"></img>
        </section>
    </div>
  );
}

export default Landing;
