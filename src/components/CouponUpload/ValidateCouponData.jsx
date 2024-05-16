import PercentageProgressBar from "../Reusable/PercentageProgressBar";
import { DoneRound } from "../../assets";
import Button from "../Reusable/Button";
import LeftProgressbar from "../Reusable/LeftProgressBar";
import { useState,useEffect,useRef } from "react";
function ValidateCouponData({
  title,
  uploadView,
  SetUploadView,
  couponDistribution,
  fileName,
  dataSetErrors,
 
}) {
  const maxnumber = Math.max(
    ...couponDistribution.map((item) => item.number),
    0
    
  );

  const [status, setStatus] = useState('')
 
  useEffect(() => {

    setStatus(uploadView === "validateCoupon" ? "current" : "" || uploadView === "PriceAutomation" ? "complete" : ""  || uploadView === "Reconciliation" ? "complete" : "");
    
  }, [uploadView]);
 
  return (
    <div className={`flex gap-8 `}>
     
     <LeftProgressbar  stepStatus={status}  />
      <div
        className={`px-6 w-full py-7 mt-4 ${
          uploadView === "validateCoupon" ? "  bg-white" : "shadow-shadow"
        }  border border-border rounded-xl`}
      >
        {uploadView === "validateCoupon" ? (
          <div className="openView">
            <p className="text-indigo-100"> Step 2 of 4</p>
            <div className="flex justify-between mb-4 mt-1">
              <h1 className="text-subtitle font-semibold ">{title}</h1>
              <button
                onClick={() => SetUploadView("couponList")}
                className=" rounded-md border-textColor border bg-white px-3 py-2 text-sm min-w-[100px]  text-text shadow shadow-sm"
              >
                Re-Upload
              </button>
            </div>
            <div className="validateCoupon mb-8">
              <span className="">Uploaded File:</span>
              <span className="text-indigo-100 ml-2">{fileName}</span>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="relative flex flex-col items-center rounded-lg border border-border bg-white px-6 pt-5 pb-5 shadow-sm">
                <div className="flex justify-between w-full ">
                  <p className="font-semibold"> Summary of Coupon price file</p>{" "}
                  <p className="text-indigo-500 font-semibold">456893 ASINs</p>
                </div>
                <div className=" border-b border-border pb-4  pt-10 w-full grid grid-cols-1 gap-8 sm:grid-cols-3">
                  <div className="flex w-full">
                    <span className="w-auto">Minimum %</span>
                    <span className="w-auto ml-2 font-semibold">10</span>
                  </div>
                  <div className="flex w-full">
                    <p className="w-auto">Maximum %</p>
                    <p className="w-auto ml-2 font-semibold">500</p>
                  </div>
                  <div className="flex w-full">
                    <p className="w-auto">Duplicate Coupons </p>
                    <p className="w-auto ml-2 font-semibold">500</p>
                  </div>
                </div>
                <div className="  pt-4  w-full grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <div className="flex w-full">
                    <span className="w-auto">Exclusions</span>
                    <span className="w-auto ml-2 font-semibold">NPD, Top Deal</span>
                  </div>
                 
                </div>
              </div>
              <div className="relative flex flex-col items-center rounded-lg border border-border bg-white px-6 pt-5 pb-2 shadow-sm">
                <div className="flex justify-between w-full ">
                  <p className="font-semibold">Coupon Distribution</p>{" "}
                </div>
                <div className="pb-0 pt-5 w-full">
                  {couponDistribution.map((item, index) => (
                    <PercentageProgressBar
                      range={item.range}
                      key={index}
                      number={item.number}
                      maxnumber={maxnumber}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="relative mt-7 flex flex-col items-center rounded-lg border border-border bg-white px-6 pt-5 pb-5 shadow-sm">
             
               
                <div className="pt-4  w-full ">
                  <div className="flex w-full">
                    <span className="w-1/6">Dataset Errors</span>
                    <div className="w-full flex flex-col"> 
                    {dataSetErrors.map((item,index)=>(<>
                    <span key={index} className="border-b block border-border mb-4 pb-2 ml-6 w-full">{item}</span>
                    </>))}
                   
                    </div>
                  </div>
                 
                </div>
              </div>
            <div className="btnGroup mt-4 flex justify-end">
           
              <Button icon={<DoneRound />}  color={'currentcolor'}  iconClass={"text-white"} btnClass={"btn PrimaryBtn"} text={"Confirm & Upload"}
               onClick={() => {
             
              SetUploadView("PriceAutomation");
              
              
            } } />
             
            </div>
          </div>
        ) : (
          <div className="closeView">
            <h1 className="text-subtitle font-semibold">2. {title}</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default ValidateCouponData;
