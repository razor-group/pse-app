import Bg from "../../assets/headerBg.jpg";
function Header({setCurrentComponent}) {
  return (
    <>
      <div className="headerBg -mx-4  sm:-mx-6 lg:-mx-8">
        <div className="relative">
          <img src={Bg} alt="" className="w-full h-full object-cover" />

          <div className="absolute bottom-0 flex flex-col justify-center px-10 py-6  text-white left-0 top-0 right-0 ">
            <div className=" flex flex-col justify-center"> 
            <h3 className="text-subtitle font-normal">
              Hii Neha, Welcome Back
            </h3>
            <h1 className="text-title font-semibold">Coupon Upload</h1>
            
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
