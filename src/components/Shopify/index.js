import React, { useState, useEffect } from "react";
import Button from "../../components/Reusable/Button";
import BackIcon from "../../assets/BackIcon";
import { useNavigate } from "react-router-dom";
import FileUpload from "../Reusable/FileUpload";
import Card from "../Reusable/Card";
import UploadICon from "../../assets/Upload";
import axios from "axios";
import { parse } from 'date-fns';
import io from "socket.io-client";
const backend_endpoint = 'https://main.dm1f71wjz3iyf.amplifyapp.com'
//const backend_endpoint = 'http://localhost:3001'
const titles = [
    "Uploaded On",
    "File Name",
    "No. of SKUs",
    "Status",
    "Action"
  ];
  const detailed_titles = [
    "id",
    "SKU (ASINxMP)",
    "Store (BrandxMP)",
    "Coupon Title",
    "Start Date",
    "End Date",
    "Discount (%)",
    "Import Result"
  ];
  const btn = {
    text: "Edit",
    link: "",
    classes: "text-indigo-600 hover:text-indigo-900",
  };
 
 function ShopifyUpload() {
  const [data, setData] = useState([]);
  const [detailedCouponData, setDetailedCouponData] = useState(null);
  const [currentBreadcrumb, setBreadcrumb] = useState(0);
  const [socket, setSocket] = useState(null);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [isFileValid, setIsFileValid] = useState(false);
  const [Filename, setFileName] = useState("");
  const [currentComponent, setCurrentComponent] = useState("home");
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileValidation = (isValid) => {
    setIsFileValid(isValid);
  };
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  async function getData() {
    try {
      const response = await axios.get(`${backend_endpoint}/uploaddata`);
      let items = response.data.data.listUmadUploadData.items;
      let newData = [];
      for(let i = 0; i < items.length; i++){
        newData.push({
          "Uploaded On": JSON.parse(items[i].data).upload_time,
          "File Name": JSON.parse(items[i].data).file_name,
          "No. of SKUs": JSON.parse(items[i].data).responsedata.length,
          "status":JSON.parse(items[i].data).status || 'WIP',
          "id":items[i].u_id
        });
      }
      newData.sort((a, b) => {
        const dateA = parse(a["Uploaded On"], 'dd/MM/yyyy, HH:mm:ss', new Date()).getTime();
        const dateB = parse(b["Uploaded On"], 'dd/MM/yyyy, HH:mm:ss', new Date()).getTime();
        return dateB - dateA; // For descending order
      });
      setData(newData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  const fetchDetailedCouponData = async (id) => {
    try {
      let newData = [];
        const response = await axios.get(`${backend_endpoint}/uploaddata/${id}`);
        let items = JSON.parse(response.data[0].data).responsedata;
        for(let i = 0; i < items.length; i++){
          newData.push({
            "id":id,
            "SKU (ASINxMP)":items[i].sku,
            "Store (BrandxMP)":items[i].store,
            "Coupon Title":items[i].title,
            "Start Date":items[i].start_date.split('T')[0],
            "End Date":items[i].end_date.split('T')[0],
            "Discount (%)":items[i].discountValue,
            "Import Result":items[i].error!= ''?items[i].status+'→'+items[i].error:items[i].status
          });
        }
        setDetailedCouponData(newData);
        setCurrentComponent("detailedcoupon");
        setBreadcrumb(JSON.parse(response.data[0].data).file_name +' '+ JSON.parse(response.data[0].data).upload_time);
    } catch (error) {
        console.error("Error fetching detailed coupon data:", error);
    }
};

const updateDiscount = async () => {
  
};
const handleCheckboxChange = (sku, store) => {
  const key = `${sku}-${store}`;
  if (selectedCheckboxes.includes(key)) {
      setSelectedCheckboxes(prevSelected => prevSelected.filter(item => item !== key));
  } else {
      setSelectedCheckboxes(prevSelected => [...prevSelected, key]);
  }
};

useEffect(() => {
  const selectAllCheckbox = document.querySelector(".select-all-checkbox");
  if (selectAllCheckbox) {
      selectAllCheckbox.addEventListener("change", handleSelectAllChange);
      return () => {
          selectAllCheckbox.removeEventListener("change", handleSelectAllChange);
      };
  }
}, [selectedCheckboxes]);

const handleSelectAllChange = () => {
  const selectAllCheckbox = document.querySelector(".select-all-checkbox");
  const checkboxes = document.querySelectorAll(".sku-checkbox:not([disabled])");

  if (selectAllCheckbox.checked) {
      checkboxes.forEach(checkbox => {
          checkbox.checked = true;
          const key = checkbox.getAttribute("data-key");
          if (!selectedCheckboxes.includes(key)) {
              setSelectedCheckboxes(prevSelected => [...prevSelected, key]);
          }
      });
  } else {
      checkboxes.forEach(checkbox => {
          checkbox.checked = false;
      });
      setSelectedCheckboxes([]);
  }
};

const isButtonEnabled = selectedCheckboxes.length > 0;

const handleDeleteButtonClick = async () =>  {
  const selectedAttributes = [];
  document.querySelectorAll(".sku-checkbox:checked").forEach(checkbox => {
      if (!checkbox.classList.contains("select-all-checkbox")) {
          selectedAttributes.push({
              upload_id:checkbox.getAttribute("data-id"),
              sku: checkbox.getAttribute("data-sku"),
              store: checkbox.getAttribute("data-store"),
              percentage: checkbox.getAttribute("data-percentage")
          });
      }
  });
  try {
    const response = axios.post(`${backend_endpoint}/deletediscount`, { selectedAttributes }, {
      headers: {
          'Content-Type': 'application/json'
      }
  });
  alert('Request initiated successfully. Please comeback after few minutes');
          // setTimeout(function(){
          //   setCurrentComponent("home");
          //   window.location.reload();
          // },2000)
} catch (error) {
    console.error("Error deleting discounts:", error);
}
};

const handleUpload = async () => {
  if (selectedFile) {
      try {
          const formData = new FormData();
          formData.append('file', selectedFile);
          alert('Request initiated successfully. Please comeback after few minutes');
          setTimeout(function(){
            setCurrentComponent("home");
            window.location.reload();
          },2000)
          const response = await axios.post(`${backend_endpoint}/upload`, formData, {
              headers: {
                  'Content-Type': 'multipart/form-data'
              }
          });
      } catch (error) {
          console.error('Error uploading file:', error);
      }
  } else {
      console.error('No file selected');
  }
};
  useEffect(() => {
    getData();
    // const newSocket = io(backend_endpoint);
    // setSocket(newSocket);
    // return () => {
    //   newSocket.disconnect();
    // };

  }, []);
  // useEffect(() => {
  //   if (!socket) return;

  //   socket.on("progress", (data) => {
  //     console.log("Progress event received:", data);
  //     setData((prevData) => {
  //       return prevData.map((item) => {
  //         if (item.status === "Pending") {
  //           return { ...item, status: data.message };
  //         }
  //         return item;
  //       });
  //     });
  //   });

  //   // Clean up function to remove event listeners on component unmount
  //   return () => {
  //     socket.off("progress");
  //   };
  // }, [socket]);


  return (
    <div className="py-4 sm:py-6 lg:py-8">
        {currentComponent === "home" ? (
        <>
          <Button icon={<UploadICon />}  color={'currentcolor'} iconClass={"text-white"} onClick={() => setCurrentComponent('upload')} text={'Upload New Coupon'} btnClass={'PrimaryBtn mt-6 ml-2 btn'}  />
          <div className="mt-24 pl-2">
            <h1 className="text-subtitle font-semibold">Pre Uploaded Files</h1>
            <p>A list of all the pre-uploaded files with coupon details.</p>
            <p style={{fontSize: '12px',marginTop:'10px'}}><i>*Only the discount codes marked as "running" in the uploaded sheet will be considered for processing.</i></p>
            </div>
          <Card titles={titles} data={data} btn={btn} setCurrentComponent={setCurrentComponent} fetchDetailedCouponData={fetchDetailedCouponData} updateDiscount={updateDiscount} handleUpload={handleUpload}  customClass={'mt-4'} />
        </>
      ) : currentComponent === "detailedcoupon" ? 
      (
        <>
        <Button
        icon={<BackIcon />}
        text={"Go Back"}
        color={"currentcolor"}
        iconClass={"text-black"}
        onClick={() => setCurrentComponent('home')}
        btnClass={"BackState flex items-center pb-4"}
      />
      <div className="detailed-top-bar display-flex">
      <div className="breadcrumb"><span onClick={() => setCurrentComponent('home')}>Home</span> / {currentBreadcrumb}</div>
      <button disabled={!isButtonEnabled} onClick={handleDeleteButtonClick} class={"delete-sku-btn flex items-center pb-4 align-right btn PrimaryBtn"}>Deactivate</button>
      </div>
      <Card titles={detailed_titles} data={detailedCouponData} fetchDetailedCouponData={fetchDetailedCouponData} setCurrentComponent={setCurrentComponent} handleCheckboxChange={handleCheckboxChange} selectedCheckboxes={selectedCheckboxes} selectAll={selectAll} handleSelectAllChange={handleSelectAllChange} customClass={'mt-4'} /> 
      </>
      ) : 
    (
        <> 
      <Button
        icon={<BackIcon />}
        text={"Go Back"}
        color={"currentcolor"}
        iconClass={"text-black"}
        onClick={() => setCurrentComponent('home')}
        btnClass={"BackState flex items-center pb-4"}
      />

      <FileUpload
        setFileName={setFileName}
        fileType={[".xlsx"]}
        fileSize={3}
        height={"min-h-[240px]"}
        fileText={"Drop Files here to upload"}
        onValidate={handleFileValidation}
        setSelectedFile={setSelectedFile}
      />
      <div className="flex w-full justify-items-end items-center"> 
        <Button icon={<UploadICon />}  color={'currentcolor'} iconClass={"text-white"} onClick={handleUpload} text={'Upload'} btnClass={'PrimaryBtn mt-6 ml-2 btn'}  />
        </div>
      </>
      
      )}
    
    </div>
  );
}

export default ShopifyUpload;
