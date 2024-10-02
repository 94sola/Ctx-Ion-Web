import team from '../assets/image/Team-frame.png'




const Team = () => {

  return(
    <div id='team' className="my-10 relative items-center justify-center w-[90%] sm:w-[86%]  mx-auto font-[Eudoxus Sans] rounded-[24px] md:rounded-[36px] lg:rounded-[48px] bg-no-repeat bg-cover" style={{backgroundImage: `url(${team})`}}>
      <div className="rounded-[24px] md:rounded-[36px] lg:rounded-[48px] py-9 px-8 bg-[#096da7]/70 font-[Eudoxus Sans] "> 
          <p className="z-10 text-white text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold leading-[40px] sm:leading-[45px] md:leading-[50px] lg:leading-[60px] w-[80%] sm:w-[80%] sm:m-4 sm:p-3 mx-auto">We have the best team to deliver research-based scientific findings and also to collaborate with for analytical testing.</p>
          <button className="mt-4 px-4 py-2 sm:px-6 sm:py-3 bg-white text-[#096da7] font-semibold rounded-full shadow-lg  cursor-pointer">Call Us Today!</button>
      </div>
    </div>
    
  )
}
export default Team