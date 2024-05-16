import { useState,useEffect } from "react";
import FileUpload from "../Reusable/FileUpload";
import SelectBox from "../Reusable/SelectBox";
import LeftProgressbar from "../Reusable/LeftProgressBar";
function UploadCouponList({
  title,
  setCurrentComponent,
  uploadView,
  SetUploadView,
  listValue,
  setFileName,

}) {
  const [isFileValid, setIsFileValid] = useState(false);

  const handleFileValidation = (isValid) => {
    setIsFileValid(isValid);
  };
  const [status, setStatus] = useState('')
 
  useEffect(() => {

    setStatus(uploadView === "couponList" ? "current" : "" || uploadView === "PriceAutomation" ? "complete" : ""  || uploadView === "Reconciliation" ? "complete" : "" || uploadView === "validateCoupon" ? "complete" : "");
    
  }, [uploadView]);
 

  return (
  
    <div className={`flex gap-8`}>
      <LeftProgressbar stepStatus={status} />
      <div
        className={`px-6 w-full py-7 ${
          uploadView === "couponList" ? "  bg-white" : "shadow-shadow"
        }  border border-border rounded-xl`}
      >
        {uploadView === "couponList" ? (
          <div className="openView">
            <p className="text-indigo-100"> Step 1 of 4</p>
            <h1 className="text-subtitle font-semibold mb-2 mt-1">{title}</h1>
            <div className="flex items-center mb-6">
              <p>Select type of file to upload: *</p>
              {listValue && (
              <div className="w-full max-w-[12rem] ml-4">
                <SelectBox listValue={listValue} />
              </div>
        )}
            </div>
            <FileUpload
              setFileName={setFileName}
              fileType={[".jpg", ".png", "application/pdf"]}
              fileSize={1}
              height={"min-h-[240px]"}
              fileText={"Drop Files here to upload"}
              onValidate={handleFileValidation}
            />
            <FileUpload
              setFileName={setFileName}
              height={"mt-3"}
              fileType={[".csv"]}
              fileSize={1}
              fileText={"Drop exclusion Files here to upload"}
              onValidate={handleFileValidation}
            />
            <div className="validateInfo mt-3 flex justify-end ">
              <div className="btnGroup mt-4 flex">
                <button
                  onClick={() => setCurrentComponent("UploadedFiles")}
                  className=" rounded-md border-indigo-500 border bg-white px-3.5 py-2.5 text-sm min-w-[100px]  text-indigo-600 shadow shadow-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    if (isFileValid) {
                      SetUploadView("validateCoupon");
                      setStatus("complete");
                    }
                  }}
                  className={`rounded-md ml-3  px-3.5 py-2.5 text-sm min-w-[100px] bg-indigo-500 text-white ${
                    isFileValid ? "" : "disabled"
                  }`}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="closeView">
            <h1 className="text-subtitle font-semibold">1. {title}</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default UploadCouponList;
