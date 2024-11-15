// ReportDocument.js
import React from "react";
import { Document, Page, Text, Image, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 10, flexDirection: "column" },
  row: { flexDirection: "row", justifyContent: "space-between", marginBottom: 10 },
  frame: { width: "48%", aspectRatio: 1, border: "1pt solid #000", padding: 5 },
  image: { width: "100%", height: "100%", objectFit: "contain" },
  footer: { marginTop: "auto", textAlign: "center", fontSize: 12 },
  signature: { fontSize: 10, textAlign: "center", marginTop: 20 },
  signatureText: { flexDirection: "column", justifyContent: "center", alignItems: "center" }
});

const PageContent = ({ images }) => {
  const rows = [];
  for (let i = 0; i < images.length; i += 2) {
    rows.push(images.slice(i, i + 2));
  }

  return (
    <Page style={styles.page}>
      {rows.map((row, rowIndex) => (
        <div style={styles.row} key={rowIndex}>
          {row.map((img, imgIndex) => (
            <div style={styles.frame} key={imgIndex}>
              <Image src={img.url} style={styles.image} />
            </div>
          ))}
        </div>
      ))}
    </Page>
  );
};

const SignaturePage = () => (
  // <Page style={styles.page}>
  //   <Text style={styles.signature}>Signature: Company Full Name</Text>
  //   <Text style={styles.footer}>Thank you for allowing us to be part of your diagnostic team.</Text>
  // </Page>
  <Page style={styles.page}>
    <Text style={styles.signatureText}>
      <span>Company Name</span>
      <span>CopyWrite @2024 - All Rights Reserved</span>
    </Text>
    <Text style={styles.footer}>Thank you for allowing us to be part of your diagnostic team.</Text>
  </Page>
  // <Page className="row text-center">
  //   <Text className="col-4"></Text>
  //   <Text className="col-4 d-flex flex-column justify-content-center align-items-center">
  //     <span>Company Name</span>
  //     <span>CopyWrite @2024 - All Rights Reserved</span>
  //   </Text>
  //   <Text className="col-4">
  //     <img
  //       src="https://via.placeholder.com/150"
  //       alt="Company Logo"
  //       className="img-fluid"
  //     />
  //   </Text>
  // </Page>
);

const ReportDocument = ({ images }) => {
  const rowsPerPage = 4;
  const imagesPerRow = 2;
  const pages = [];
  for (let i = 0; i < images.length; i += rowsPerPage * imagesPerRow) {
    const pageImages = images.slice(i, i + rowsPerPage * imagesPerRow);
    pages.push(pageImages);
  }

  return (
    <Document>
      {pages.map((pageImages, index) => (
        <PageContent key={index} images={pageImages} />
      ))}
      <SignaturePage />
    </Document>

  );
};

export default ReportDocument;