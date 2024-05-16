function PercentageProgressBar ({ range, number, maxnumber }) {
  const widthPercentage = (number / maxnumber) * 100;

  return (
    <div className="flex w-full items-center pb-2">
      <span className="w-1/6">{range}</span>
      <div className="w-4/6 min-h-3 pl-2">
        <div
          className="bg-progressBar min-h-3"
          style={{ width: `${widthPercentage}%` }}
        ></div>
      </div>
      <span className="w-auto ml-5">{number}</span>
    </div>
  );
};

export default PercentageProgressBar;

    