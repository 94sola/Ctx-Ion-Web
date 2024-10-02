import landing from '../assets/image/hero-image.webp'

const Hero = () => {
    return (
        <div id='team' className="my-10 relative items-center pt-28 justify-center w-full sm:w-full  mx-auto font-[Eudoxus Sans] rounded-[12px] md:rounded-[14px] lg:rounded-[16px] bg-no-repeat bg-cover" style={{backgroundImage: `url(${landing})`,}}>
            <div className="rounded-12px] md:rounded-[12px] lg:rounded-[12px] py-9 px-8 bg-[#096da7]/60 font-[Eudoxus Sans] "> 
            <div className="relative z-20 bg-transparent py-9 px-6 lg:px-8">
                <h1 className="text-center text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold mt-8">
                    Precision, Accuracy, Discovery
                </h1>
                <p className="text-white text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold leading-[1.4] mx-auto w-[60%] sm:w-[50%] mt-4">Welcome to CTX-ION, where precision meets excellence in every analysis.</p>
                <div className="flex justify-center mt-6">
                    <button className="font-bold text-base  leading-[19.2px] border  text-black border-[#096DA7] hover:bg-[#096DA7] hover:text-[#f3faff] px-6 py-3 rounded-[28px] w-fit transition duration-300 ease-in-out">
                    Learn More
                    </button>
                </div>
            </div>
        </div>
        </div>
        
        

    );
  };
  
  export default Hero;