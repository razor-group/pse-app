import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from "highcharts/highcharts-more";
import SelectBox from "../Reusable/SelectBox";
import DropdownButton from "../Reusable/DropdownButton";
import LeftProgressbar from "../Reusable/LeftProgressBar";
const listValue = ["Dataset (CSV)", "png", "pdf"]
function Reconciliation({
  title,
  uploadView,
  SetUploadView,
  couponDistribution,
  DummyData,
  apiData,
  DummyTitles,

}) {
  const [chartOptions, setChartOptions] = useState({});
  const status = uploadView === "Reconciliation" ? "current" : "";
  HighchartsMore(Highcharts);
  useEffect(() => {
    const processData = (apiData) => {
      let cumulative = 0;
      return apiData.map((item, index, arr) => {
        if (index === 0) {
          cumulative = item.value;
          return {
            name: item.label,
            y: item.value,
          };
        } else if (index < arr.length - 1) {
          const value = item.value;
          const point = {
            name: item.label,
            y: value,
          };
          cumulative += value;
          return point;
        } else {
          // The last point should be the sum
          return {
            name: item.label,
            isSum: true,
            color: Highcharts.getOptions().colors[1],
          };
        }
      });
    };

    setChartOptions({
      chart: {
        type: "waterfall",
      },
      title: {
        text: "",
      },
      xAxis: {
        type: "category",
      },
      yAxis: {
        title: {
          text: "",
        },
      },
      legend: {
        enabled: false,
      },
      tooltip: {
        pointFormat: "<b>${point.y:,.2f}</b> USD",
      },
      series: [
        {
          type: "waterfall",
          upColor: Highcharts.getOptions().colors[2],
          color: Highcharts.getOptions().colors[3],
          data: processData(apiData),
          dataLabels: {
            enabled: true,
            formatter: function () {
              return Highcharts.numberFormat(this.y / 1000, 0, ",") + "k";
            },
            style: {
              fontWeight: "bold",
            },
          },
          pointPadding: 0,
        },
      ],
    });
  }, [apiData]);
  return (
    <div className={`flex gap-8`}>
        <LeftProgressbar  stepStatus={status} lastStep={true}  />
      <div
        className={`px-6 w-full py-7 mt-4 ${
          uploadView === "Reconciliation" ? "  bg-white" : "shadow-shadow"
        }  border border-border rounded-xl`}
      >
        {uploadView === "Reconciliation" ? (
          <div className="openView">
            <p className="text-indigo-100"> Step 4 of 4</p>
            <div className="flex justify-between mb-4 mt-1">
              <h1 className="text-subtitle font-semibold ">{title}</h1>
            </div>
            <div className="grid grid-cols-1 justify-between  sm:grid-cols-2">
            <div>
            <h3>CAM Drop-off Waterfall</h3>
            <p>Coupon 145</p>

            </div>
            <div className="justify-end grid">
               
                <DropdownButton list={listValue} title={"Export"} />
              </div>
            </div>

            <div className="border shadow-shadow bg-white border-border rounded-xl px-6 py-7 mt-6">
              <HighchartsReact highcharts={Highcharts} options={chartOptions} />
            </div>
          </div>
        ) : (
          <div className="closeView">
            <h1 className="text-subtitle font-semibold">4. {title}</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Reconciliation;
