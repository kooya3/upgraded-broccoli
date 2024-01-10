"use client";

import DropzoneComponent from "react-dropzone";

function Dropzone() {
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

     
        <section>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {}
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        </section>
      )}
    </DropzoneComponent>
  )
}

export default Dropzone