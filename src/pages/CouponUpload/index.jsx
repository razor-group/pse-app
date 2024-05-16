import Card from "../../components/Reusable/Card";
import Header from "../../components/CouponUpload/Header";
import { useState } from "react";
import UploadView from "../../components/CouponUpload/Index";
import Button from "../../components/Reusable/Button";
import UploadICon  from "../../assets/Export";


const titles = [
  "Uploaded On",
  "File Name",
  "Who Uploaded",
  "No. of SKUs",
  "Success Rate",
  "Status",
  "Error(s)",
  "",
];
const data = [
  {
    "Uploaded On": "3/10/2023 9:42 pm",
    "File Name": "Coupon 1298",
    "Who Uploaded": "Rebecca",
    "No. of SKUs": "1002",
   
    "Success Rate": "98%",
    "status":"in-progress",
    "Error(s)": "35",
  },
  {
    "Uploaded On": "10/10/2023 10:34 pm",
    "File Name": "Coupon 128",
    "Who Uploaded": "Steve",
    "No. of SKUs": "56338",
   
    "Success Rate": "98%",
    "status":"failed",
    "Error(s)": "33",
  },
  {
    "Uploaded On": "4/10/2023 5:43 am",
    "File Name": "Coupon 1568",
    "Who Uploaded": "Mike",
    "No. of SKUs": "1002",
    
    "Success Rate": "60%",
    "status":"Reconciled",
    "Error(s)": "23",
  },
  {
    "Uploaded On": "3/12/2023 2:30 am",
    "File Name": "Coupon 1295",
    "Who Uploaded": "John",
    "No. of SKUs": "304",
   
    "Success Rate": "10%",
    "status":"failed",
    "Error(s)": "99",
  },
  {
    "Uploaded On": "3/08/2023 11:20 pm",
    "File Name": "Coupon 3458",
    "Who Uploaded": "Neha",
    "No. of SKUs": "773628",
   
    "Success Rate": "50%",
    "status":"failed",
    "Error(s)": "45",
  },
];
const DummyData = [
  {
    "S.No": "1",
    "Related SKUs": "1002",
    "Related Price": "$658",
    "Reason": "There is some error in the file type",
  },
  
];
const DummyTitles = [
  
    "S.No",
    "Related SKUs" ,
    "Related Price" ,
    "Reason",
  
  
];
const btn = {
  text: "Edit",
  link: "",
  classes: "text-indigo-600 hover:text-indigo-900",
};
function CouponUpload() {
  const [currentComponent, setCurrentComponent] = useState("UploadedFiles");
  //const showUploadedFiles = () => setCurrentComponent("UploadedFiles");
  
  return (
    <>
      {currentComponent === "UploadedFiles" ? (
        <>
          <Header setCurrentComponent={setCurrentComponent} />
          
          <Button icon={<UploadICon />}  color={'currentcolor'} iconClass={"text-white"} onClick={() => setCurrentComponent('UploadCoupon')} text={'Upload New Coupon'} btnClass={'PrimaryBtn mt-6 ml-2 btn'}  />
          <div className="mt-24 pl-2">
            <h1 className="text-subtitle font-semibold">Pre Uploaded Files</h1>
            <p>A list of all the pre-uploaded files with coupon details.</p>
            </div>
          <Card titles={titles} data={data} btn={btn} customClass={'mt-4'} />
        </>
      ) : (
        <UploadView DummyData={DummyData} DummyTitles={DummyTitles} setCurrentComponent={setCurrentComponent}  currentComponent={currentComponent}/>
      )}
    </>
  );
}

export default CouponUpload;
