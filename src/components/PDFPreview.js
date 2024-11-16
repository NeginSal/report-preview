import React from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import ReportDocument from "./ReportDocument";

const PDFPreview = ({ images, onClose }) => {

  const showPDFPreview = () => {
    return (
      <div className="row mx-3">
        <h4 className="text-info text-center">PDF Preview</h4>
        {/* PDF Viewer */}
        <div className="border rounded-3 p-3 m-2">
          <PDFViewer width="100%" height="500px">
            <ReportDocument images={images} />
          </PDFViewer>
        </div>
        <div className="d-flex justify-content-center align-items-baseline my-3">
          {/* PDF Download Button */}
          <PDFDownloadLink
            document={<ReportDocument images={images} />}
            fileName="report.pdf"
            className="btn btn-success"
          >
            {({ loading }) => (loading ? "Preparing document..." : "Download PDF")}
          </PDFDownloadLink>
          <button type="button" className="btn btn-secondary ms-2" onClick={onClose} style={{ marginBottom: "10px" }}>
            Back to Image List
          </button>
        </div>
      </div>
    )
  };

  return (
    <>
      {showPDFPreview()}
    </>
  );
};

export default PDFPreview;
