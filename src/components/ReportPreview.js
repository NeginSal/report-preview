import React, { useEffect, useState } from "react";
import ImageList from "./ImageList";
import PDFPreview from "./PDFPreview";

const ReportPreview = () => {
  const [images, setImages] = useState([]);
  const [showPDF, setShowPDF] = useState(false);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?limit=12")
      .then((response) => response.json())
      .then((data) => {

        const formattedImages = data.map((img) => ({
          id: img.id,
          thumbnailUrl: img.download_url,
          title: img.author,
        }));
        setImages(formattedImages);
      })
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