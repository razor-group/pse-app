import Card from "../Reusable/Card";
import { DoneRound } from "../../assets";
import Button from "../Reusable/Button";
import Loader from "../../assets/Loader";
import LottiePlayer from "../Reusable/LottiePlayer"; 
import { useState,useEffect } from "react";
import LeftProgressbar from "../Reusable/LeftProgressBar";
function PriceAutomation({

  title,
  uploadView,
  SetUploadView,
  couponDistribution,
  DummyData,
  DummyTitles,
 
}) {
  const [uploadState, setUploadState] = useState(false);
  const data = DummyData;
  const titles = DummyTitles;
  const [status, setStatus] = useState('');
  useEffect(() => {

  

    setStatus( uploadView === "PriceAutomation" ? "current" : ""  || uploadView === "Reconciliation" ? "complete" : "");
    
    
  }, [uploadView]);
 
  

  return (
    
    <div className={`flex gap-8`}>
       <LeftProgressbar  stepStatus={status}  />
      <div
        className={`px-6  w-full py-7 mt-4 ${
          uploadView === "PriceAutomation" ? "  bg-white" : "shadow-shadow"
        }  border border-border rounded-xl`}
      >
        {uploadView === "PriceAutomation" ? (
          <div className="openView">
            <p className="text-indigo-100"> Step 3 of 4</p>
            <div className="flex justify-between mb-4 mt-1">
              <h1 className="text-subtitle font-semibold ">{title}</h1>
              {/* <button
                onClick={() => SetUploadView("couponList")}
                className=" rounded-md border-textColor border bg-white px-3 py-2 text-sm min-w-[100px]  text-text shadow shadow-sm"
              >
                Re-Upload
              </button> */}
            </div>

            <div className="flex gap-8 mt-8  items-center">
              <div
                className=" flex-initial w-2/4 relative col-span-2"
                aria-hidden="true"
              >
                <div className=" rounded-full bg-gray-200">
                  <div
                    className="h-2 rounded-full relative bg-indigo-600"
                    style={{ width: "87.5%" }}
                  >
                    <div class="absolute bottom-0 right-[-28px] flex flex-col items-center  mb-5 ">
                      <span class="relative rounded-md z-10 p-4 text-xs leading-none  text-white whitespace-no-wrap bg-indigo-600 shadow-lg">
                        88%
                      </span>
                      <div class="w-3 h-3 -mt-2 rotate-45 bg-indigo-600"></div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="w-auto text-disabled">Time left: 15 secs</p>
              <button
                hidden
                className="w-1/4  justify-end text-indigo-100 underline"
              >
                Coupon 145
              </button>
              <div className="btnGroup w-auto mt-0 mr-0 mb-auto ml-auto  items-center flex justify-end">
            {uploadState ? <div className="flex">
              <LottiePlayer Lottie={Loader} /> 
            </div> : 
              <Button
                btnClass={"btn SecondaryBtn"}
                text={"Check Reconciliation Report"}
                onClick={() => {
             
                  SetUploadView("Reconciliation");
                  setStatus('complete');
                  
                } }
              
              />
            }
            </div>
           
            </div>
            <div
              hidden
              className="border shadow-shadow bg-white border-border rounded-xl px-6 py-7 mt-12"
            >
              <div className="flex justify-center items-center ">
                <div className="flex flex-1 w-1/3 flex-col text-center">
                  <p className="text-disabled">Total Coupons </p>
                  <h1 className=" font-semibold mt-2 text-2xl">123</h1>
                </div>
                <div className="flex flex-1 w-1/3 flex-col text-center">
                  <p className="text-disabled">Total Coupons </p>
                  <h1 className="font-semibold mt-2 text-2xl">123</h1>
                </div>
                <div className="flex flex-1 w-1/3 flex-col text-center">
                  <p className="text-disabled">Total Coupons </p>
                  <h2 className="font-semibold mt-2 text-2xl">123</h2>
                </div>
              </div>
            </div>
            <div
              hidden
              className="border shadow-shadow bg-white border-border rounded-xl px-6 py-7 mt-12"
            >
              <div className="flex justify-between items-center px-2 mb-[-10px]">
                <div className="">
                  <h1 className="font-semibold text-subtitle ">Errors</h1>
                  <p>
                    A list of all the pre-uploaded files with coupon details.
                  </p>
                </div>
                <button className="rounded-md border-indigo-500 border bg-white px-3.5 py-2.5 text-sm min-w-[100px]  text-indigo-600 shadow shadow-sm">
                  Export
                </button>
              </div>
              {/* <Card data={data} titles={titles} /> */}
            </div>
           
           
          </div>
        ) : (
          <div className="closeView">
            <h1 className="text-subtitle font-semibold">3. {title}</h1>
          </div>
           
        
        )}
      </div>
    </div>
  );
}

export default PriceAutomation;
