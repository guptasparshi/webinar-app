import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

/**
 * ImageUpload component allows users to upload an image and provides a preview.
 * 
 * @param {function} onImageUpload - Callback function to handle the uploaded image data.
 * @param {string|null} imageUrl - Optional URL for the initial image preview.
 */
function ImageUpload({ onImageUpload, imageUrl = null }) {
  // State to manage the image preview
  const [imagePreview, setImagePreview] = useState(imageUrl);

  /**
   * Handles the click event to open the file input dialog.
   * Uses FileReader to read the selected image file and set it as the preview.
   */
  const handleUploadClick = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";

    // When a file is selected, read and preview it
    fileInput.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setImagePreview(e.target.result);  // Set preview image
          onImageUpload(e.target.result);    // Pass image data to parent component
        };
        reader.readAsDataURL(file);
      }
    };

    fileInput.click();  // Trigger the file input dialog
  };

  return (
    <div>
      {/* Label for the image upload */}
      <label
        style={{
          display: "block",
          marginBottom: "2px",
          textAlign: "start",
          fontWeight: "bold",
          fontSize: "0.75em",
        }}
      >
        Instructor Image
      </label>

      {/* Container for the image preview or upload icon */}
      <div
        style={{
          width: "8em",
          height: "7em",
          border: "2px dashed #D9DBDC",
          backgroundColor: "#F2F4F8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          borderRadius: "12px",
        }}
        onClick={handleUploadClick}  // Click event to trigger file upload
      >
        {imagePreview ? (
          // Display the uploaded image preview
          <img
            src={imagePreview}
            alt="Preview"
            style={{ width: "100%", height: "100%", borderRadius: "8px" }}
          />
        ) : (
          // Display an add icon if no image is uploaded yet
          <AddIcon style={{ fontSize: "60px", color: "#636973" }} />
        )}
      </div>
    </div>
  );
}

export default ImageUpload;
