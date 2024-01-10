"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import DropzoneComponent from "react-dropzone";

function Dropzone() {
  const [loading, setLoading] = useState(false);

  const onDrop = (acceptedFiles: File[]) => {
    acceptedFiles.forEach(file => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = async () => {
        await uploadPost(file);
      };
      reader.readAsArrayBuffer(file);
    }); 
  };

  const uploadPost = async (selectedFile: File) => {

  }





  // max file size 20MB
  const maxSize = 20971520;

  return (
    <DropzoneComponent 
    minSize={0}
    maxSize={maxSize}
      onDrop={acceptedFiles => console.log(acceptedFiles)}>
      {({ getRootProps, getInputProps, isDragActive, isDragReject, fileRejections }) => {
        const isFileTooLarge = 
        fileRejections.length > 0 && fileRejections[0].file.size > maxSize;

        return (

     
        <section className="m-4">
          <div 
          {...getRootProps()}
          className={cn(
            "w-full h-[20vh] flex justify-center items-center p-5 border border-dashed rounded-lg text-center ",
            isDragActive ? "bg-[#035FFE] text-white animate-pulse" : "bg-slate-100/50 dark:bg-slate-800/80 text-slate-400"
          )}
          >
            <input {...getInputProps()} />
            {!isDragActive && "Click here or drop a file to upload!"}
            {isDragActive && !isDragReject && "Drop to upload this file!"}
            {isDragReject && "File type not accepted, sorry!"}
            {isFileTooLarge && (
              <div className="text-danger mt-2">File is too large.</div>
            )}
          </div>
        </section>
      );
    }}
    </DropzoneComponent>
  );
}

export default Dropzone