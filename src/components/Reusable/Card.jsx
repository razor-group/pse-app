import StatusBadge from "./StatusBadge";
import Button from "./Button";

function Card({ data, titles, btn, customClass, setCurrentComponent,fetchDetailedCouponData,handleCheckboxChange,selectedCheckboxes,selectAll,handleSelectAllChange }) {
  const columnHeaders = data && data.length > 0 ? Object.keys(data[0]) : [];
  return (
    <>
      <div className={`flow-root ${customClass}`}>
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full px-2 py-2 align-middle">
            <div className="overflow-hidden shadow ring-1 border border-border ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-border">
                <thead className="bg-gray-50">
                  <tr>
                  {titles.map((header) => (
                header != "id" && (

               
              <th
                key={header}
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
              >
                {header === "SKU (ASINxMP)" ? (
                  <>
                     <input
                type="checkbox"
                onChange={handleSelectAllChange}
                className="select-all-checkbox"
            /> {header}
                  </>
                ) : (
                  header
                )}
              </th>
            )) )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-white">
                  {data &&
                    data.map((row, rowIndex) => (
                      <tr key={rowIndex} data-disabled={row["Import Result"] === "Deactivated"}>
                        {columnHeaders.map((col, colIndex) => (
                          col !== "id" && (
                            <td
                              key={`${rowIndex}-${colIndex}`}
                              className="py-4 pl-4 pr-3  sm:pl-6"
                            >
                        {col === "SKU (ASINxMP)" ? (
                 <>
                      <input
                        type="checkbox"
                        data-key={`${row["SKU (ASINxMP)"]}-${row["Store (BrandxMP)"]}`}
                        data-id={row["id"]}
                        data-store={row["Store (BrandxMP)"]}
                        data-sku={row["SKU (ASINxMP)"]}
                        data-percentage={row["Discount (%)"]}
                        onChange={() => handleCheckboxChange(row["SKU (ASINxMP)"], row["Store (BrandxMP)"])}
                        className="sku-checkbox"
                        disabled={row["Import Result"] === "Deactivated"}
                    />{row[col]}
              </>
) : col === "status" ? (
  <StatusBadge status={row[col]} />
) : (
  <div>{row[col]}</div>
)}
                            </td>
                          )
                        ))}
                        {btn && (
                          <td className="relative py-4 pl-3 pr-4  sm:pr-6 display-flex">
                            <Button
                              onClick={() => {
                                setCurrentComponent('detailedcoupon');
                                fetchDetailedCouponData(row.id);
                            }}
                              color={"currentcolor"}
                              iconClass={"text-white"}
                              text={"View"}
                              btnClass={"PrimaryBtn ml-2 btn left-view-btn"}
                            />
                            
                            {row["status"] === "WIP" && (
                              <Button
                                onClick={() => {
                                  window.location.reload();
                                }}
                                color={"currentcolor"}
                                iconClass={"text-white"}
                                text={"Refresh"}
                                btnClass={"ml-2 right-view-btn"}
                              />
                            )}
                          </td>
                        )}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
