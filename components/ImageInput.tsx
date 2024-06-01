import { UploadButton } from '@/utils/uploadthing';
import React from 'react'

function ImageInput() {
  return (
    <div>
        <UploadButton
        endpoint="docProfileImage"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  )
}

export default ImageInput