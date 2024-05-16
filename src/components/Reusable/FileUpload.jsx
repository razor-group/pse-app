import React, { useState, useEffect } from "react";
import UploadIcon from "../../assets/Upload1";
import FileIcon from "../../assets/FileDock1";

function FileUpload({ fileType = [], fileSize, onValidate, fileText, height, setSelectedFile }) {
  const [validateError, setValidateError] = useState(false);
  const [draggedFiles, setDraggedFiles] = useState([]);

  useEffect(() => {
    onValidate(!validateError);
  }, [validateError, onValidate]);

  const validateFile = (file) => {
    const fileSizeTotal = fileSize * 1024 * 1024;
    const fileExtension = file.name.split(".").pop();

    const isValidType =
      Array.isArray(fileType) &&
      (fileType.includes(file.type) || fileType.includes("." + fileExtension));
    const isValidSize = file.size <= fileSizeTotal;

    const isValid = isValidType && isValidSize;
    setValidateError(!isValid);

    return isValid;
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    processFiles(e.dataTransfer.files);
  };

  const handleFileSelect = (e) => {
    processFiles(e.target.files);
  };

  const processFiles = (selectedFiles) => {
    const files = Array.from(selectedFiles).filter(validateFile);
    setDraggedFiles(files);
    if (files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handleInputClick = () => {
    fileInputRef.current.click();
  };

  const fileInputRef = React.useRef(null);

  return (
    <>
      <div
        className={`cursor-pointer ${height} justify-center relative w-full rounded-lg border-2 border-dashed border-border p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex flex-col items-center ${
          validateError ? "border-red" : ""
        }`}
        onClick={handleInputClick}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {validateError
          ? ""
          : !draggedFiles.length > 0 && (
              <UploadIcon
                viewBox={"0 0 24 24"}
                color={"currentcolor"}
                className="text-black"
                width={"30"}
                height={"30"}
              />
            )}
        <div className="text-center mt-2">
          {validateError ? (
            <>
              <p className="text-red font-bold">Error!</p>
              <p className="mt-3">
                Invalid file type, Supported File type is: {fileType.join(", ").replaceAll(".", " ")}
              </p>
              <button className="border-black border min-w-[130px] mt-10 justify-center flex items-center rounded  mx-auto px-3.5 py-2 text-sm  text-black shadow-sm">
                {" "}
                Replace
              </button>
            </>
          ) : (
            <>
              {" "}
              {draggedFiles.length > 0 &&
                draggedFiles.map((file, index) => (
                  <li className="list-none flex items-center" key={index}>
                    <FileIcon
                      viewBox={"0 0 24 24"}
                      color={"currentcolor"}
                      className="text-black"
                      width={"30"}
                      height={"30"}
                    />
                    <span className="ml-2 mt-1">{file.name} </span>
                  </li>
                ))}
              {draggedFiles.length > 0 ? (
                <>
                  <button className="border-black border min-w-[130px] mt-7 justify-center flex items-center rounded  mx-auto px-3.5 py-2 text-sm  text-black shadow-sm">
                    Replace
                  </button>
                </>
              ) : (
                <>
                  {fileText} <span className="mr-1">({fileType.join(", ").replaceAll(".", " ")})</span>, or click{" "}
                  <span className="text-indigo-500 underline ml-1">Upload</span>
                </>
              )}
            </>
          )}
        </div>

        <input
          type="file"
          onChange={handleFileSelect}
          style={{ display: "none" }}
          id="fileUpload"
          ref={fileInputRef}
          accept={Array.isArray(fileType) ? fileType.join(",") : ""}
        />
        <h3 className="text-sm absolute bottom-3 right-3">Max Size: {fileSize} MB</h3>
      </div>
    </>
  );
}

export default FileUpload;
