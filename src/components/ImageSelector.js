import React from "react";

import "./ImageSelector.css";

const ImageSelector = () => {
  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {selectedImage && (
        <div className="image-container">
          <img src={selectedImage} alt="Selected Image" className="image" />
        </div>
      )}
    </>
  );
};
export default ImageSelector;
