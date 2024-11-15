import React, { useEffect, useState } from "react";
import ImageList from "./ImageList";
import PDFPreview from "./PDFPreview";

const ReportPreview = () => {
  const [images, setImages] = useState([]);
  const [showPDF, setShowPDF] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=12")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  return (
    <div>
      {showPDF ? (
        <PDFPreview images={images} onClose={() => setShowPDF(false)} />
      ) : (
        <ImageList images={images} onGenerateReport={() => setShowPDF(true)} />
      )}
    </div>
  );
};

export default ReportPreview;
