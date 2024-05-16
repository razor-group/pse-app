import { CheckIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function LeftProgressbar({ stepStatus, lastStep }) {
  return (
    <>
      <li step={stepStatus} key={stepStatus} className={classNames("relative")}>
        {stepStatus === "complete" ? (
          <>
            <div
              className="absolute complete left-4  top-9 -ml-px mt-0.5 h-full w-0.5 bg-indigo-600"
              aria-hidden="true"
            />

            <div className="group relative flex items-start top-9">
              <span className="flex h-9 items-center">
                <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
                  <CheckIcon
                    className="h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                </span>
              </span>
            </div>
          </>
        ) : stepStatus === "current" ? (
          <>
            {!lastStep && (
              <div
                className="absolute upcoming left-4  top-9 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
                aria-hidden="true"
              />
            )}

            <div
              className="group relative flex items-start top-9"
              aria-current="step"
            >
              <span className="flex h-9 items-center" aria-hidden="true">
                <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white">
                  <span className="h-2.5 w-2.5 rounded-full bg-indigo-600" />
                </span>
              </span>
            </div>
          </>
        ) : (
          <>
            {!lastStep && (
              <div
                className="absolute upcoming left-4  top-9 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
                aria-hidden="true"
              />
            )}

            <div className="group relative flex items-start top-9">
              <span className="flex h-9 items-center" aria-hidden="true">
                <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400">
                  <span className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
                </span>
              </span>
            </div>
          </>
        )}
      </li>
    </>
  );
}
