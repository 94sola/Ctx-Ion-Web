import environmental from '../assets/image/environmental.png'
import food from '../assets/image/food.png'
import phytochemical from '../assets/image/phytochemical.png'
import servic from '../assets/image/Services-frames.jpg'



const Service = () => {

  return(
    <div id='services' className=" w-full h-fit bg-[#fafafa] font-[Eudoxus Sans] pb-8">
      <h2 className="font-bold text-[#11131c] text-[64px] leading-[76.8px] pt-[54px] pb-7 ml-[58px]">Our Services</h2>

      <div className="mx-[28px] my-[20px] grid grid-cols-1 sm:grid-cols-2 justify-between gap-4 w-fit h-fit">

        <div className="w-fit h-fit gap-3">

          <div className="border rounded-[48px] gap-2 p-[32px] bg-white mb-3  justify-center border-[#e3f5ff]">
            <img src= {environmental} className='m-4'/>
            <h6 className="leading-6 text-start text-[20px] font-bold m-3">Environmental</h6>
            <p className="font-normal ml-4 text-[16px] leading-8 text-[#747474]">We are capable of testing for the presence of pollutants in various environmental matrices such as soils and various water types. Whether as part of regulatory compliance testing or a research effort, we help you produce great data using modern analytical techniques. </p>
          </div>

          <div className="border rounded-[48px] gap-2 p-[32px] bg-white mb-3 border-[#e3f5ff] justify-center">
            <img src= {food} className='m-4'/>
            <h6 className="leading-6 text-start text-[20px] font-bold m-3">Food</h6>
            <p className="font-normal ml-4 text-[16px] leading-8 text-[#747474] ">We help our customers in the food industry obtain adequate information about their products by offering a range of analytical test focusing on various food compound classes such as vitamins, fatty acids and minerals. </p>
          </div>

          <div className="border rounded-[48px] gap-2 p-[32px] bg-white mb-3 border-[#e3f5ff] justify-center">
            <img src= {phytochemical}  className='m-4' />
            <h6 className="leading-6 text-start text-[20px] font-bold m-3">Phytochemicals</h6>
            <p className="font-normal ml-4 text-[16px] leading-8 text-[#747474] ">Focused on our customers in the research category, this service provides researchers with in depth information regarding bioactive compounds in plant materials. Using contemporary methodologies, we ensure that scientists working with us in this regard lack no information concerning their plant samples. </p>
          </div>

        </div>

        <img src= {servic} className='rounded-[48px] h-fit w-[93%] ml-[20px]'/>

      </div>
      
    </div>
  )
}


export default Service