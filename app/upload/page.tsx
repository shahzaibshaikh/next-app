"use client";
import React, { useState } from "react";
import { CldImage, CldUploadWidget } from "next-cloudinary";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");

  return (
    <div>
      {publicId && <CldImage src={publicId} width={270} height={180} alt='A coffee' />}
      <CldUploadWidget
        uploadPreset='u1lnura1'
        options={{
          sources: ["local"],
          multiple: false,
          maxFiles: 5
        }}
        onUpload={(result, widget) => {
          if (result.event != "success") return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button className='btn btn-primary' onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </div>
  );
};

export default UploadPage;
