import React from "react";
import Resizer from 'react-image-file-resizer';
import axios from "axios";

import './styles.less';

const imageUpload = ({ images, setImages}) => {

  const fileUploadAndResize = (e) => {
    console.log(Object.values(e.target.files));
    // resize image before upload to cloudinary
    const files = Object.values(e.target.files);
    const allUploadedFiles = images.imgUrl
    if(files) {
      for (const file of files) {
        console.log('File',file)
        Resizer.imageFileResizer(
          file,
          720,
          720,
          'JPEG',
          100,
          0,
          (uri) => {
            // console.log('URI====>',uri)
            axios.post(`${process.env.REACT_APP_API}/cloudinary/uploadimages`, {image: uri})
              .then(res => {
                console.log('IMAGE Respond data =>>>>>>>', res)
                allUploadedFiles.push(res.data)
                setImages({...images, imgUrl: allUploadedFiles})
              })
              .catch(err =>console.log(err))
          },
          'base64'
        );
      }

    }

    // send back to server to upload to cloudinary
    // set url to images[] in the parent component state

  }
  return (
    <div className="row">
      <label className="choose-file-label">
        Choose File
        <input
          type="file"
          multiple
          hidden
          accept="images/*"
          onChange={fileUploadAndResize}
        />
      </label>
    </div>
  );
}

export default imageUpload;