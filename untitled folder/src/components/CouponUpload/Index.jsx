import { useState } from "react";
import UploadCouponList from "./UploadCouponList";
import BackIcon from "../../assets/BackIcon";
import ValidateCouponData from "./ValidateCouponData";
import PriceAutomation from "./PriceAutomation";
import Reconciliation from "./Reconciliation";

import Button from "../Reusable/Button";

const couponDistribution = [
  { range: "20%-25%", number: 322 },
  { range: "32%-25%", number: 422 },
  { range: "44%-25%", number: 522 },
  { range: "35%-25%", number: 922 },
];
const listValue = [
  "Wade Cooper",
  "Arlene Mccoy",
  "Devon Webb",
  "Tom Cook",
  "Tanya Fox",
  "Hellen Schmidt",
  "Caroline Schultz",
];
const apiData = [
  { label: "Total TTM Net Rev", value: 8981.854, percentage: 51.9 },
  { label: "Insufficient Inventory/OOS", value: 4659302 },
  {
    label: "Overlapping Deal/Coupon On-going",
    value: 902907,
    percentage: 10.1,
  },
  { label: "In-active/Suppressed ASIN", value: 483411, percentage: 5.4 },
  {
    label: "Restricted from Promotions (Adult/Offensive Products, etc)",
    value: 147256,
    percentage: 1.6,
  },
  { label: "Unknown Error/Reattempt Upload", value: 346425, percentage: 3.9 },
  {
    label: "Seller ID Not Found/Account Inaccessible",
    value: 29219,
    percentage: 0.3,
  },
  { label: "Insufficient Low Star Rating", value: 1772, percentage: 0 },
  { label: "Successful TTM Net Rev", value: 2411483, percentage: 26.8 },
];
const dataSetErrors = [
  "x rows dropped due to discount % value not being in range [5,50]",
  "x rows dropped due to not supported marketplaces",
  "x rows dropped due to invalid budget values",
  "x rows dropped due to invalid discount types",
];

function UploadView({
  setCurrentComponent,
  DummyTitles,
  currentComponent,
  DummyData,
}) {
  const [uploadView, SetUploadView] = useState("couponList");
  const [fileName, setFileName] = useState(null);

  return (
    <>
      <div className="py-4 sm:py-6 lg:py-8">
        <Button
          icon={<BackIcon />}
          text={"Go Back"}
          color={"currentcolor"}
          iconClass={"text-black"}
          onClick={() => setCurrentComponent("UploadedFiles")}
          btnClass={"BackState flex items-center pb-4"}
        />

        <nav aria-label="Progress" className="">
          <ol role="list" className="overflow-hidden">
            <UploadCouponList
              listValue={listValue}
              uploadView={uploadView}
              title={"Upload Coupon List"}
              setCurrentComponent={setCurrentComponent}
              SetUploadView={SetUploadView}
              setFileName={setFileName}
            />

            <ValidateCouponData
              fileName={fileName}
              dataSetErrors={dataSetErrors}
              uploadView={uploadView}
              SetUploadView={SetUploadView}
              title={"Validate Coupon Data"}
              couponDistribution={couponDistribution}
            />

            <PriceAutomation
              DummyData={DummyData}
              DummyTitles={DummyTitles}
              uploadView={uploadView}
              SetUploadView={SetUploadView}
              title={"Run Coupon Price Automation"}
            />
            <Reconciliation
              apiData={apiData}
              uploadView={uploadView}
              SetUploadView={SetUploadView}
              title={"Reconciliation"}
            />
          </ol>
        </nav>
      </div>
    </>
  );
}

export default UploadView;
