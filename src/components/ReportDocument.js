import React from "react";
import { Document, Page, Text, View, Image, StyleSheet } from "@react-pdf/renderer";

const companyName = "Veterinary World Radiology Inc.";
const companyLogo = "https://via.assets.so/img.jpg?w=400&h=150&tc=#006666&bg=#cce6ff";

const styles = StyleSheet.create({
  page: {
    // padding: 20,
    padding: 15,
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginBottom: 15,
    marginBottom: 10,
  },
  frame: {
    width: "48%",
    height: 150, 
    border: "1pt solid #000",
    padding: 5,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  footer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 10,
    color: "gray",
    borderTop: "1pt solid #000", 
    paddingTop: 5,
  },
  footerText: {
    textAlign: "center",
  },
  footerColumn: {
    width: "33.33%",
    alignItems: "center",
  },
  logo: {
    width: 50,
    height: 50,
  },
  signaturePage: {
    marginTop: "auto",
    marginBottom: 45,
    textAlign: "center",
    padding: 20,
  },
  signatureText: {
    fontSize: 12,
    marginTop: 30,
    textAlign: "center",
  },
});

const PageContent = ({ images, isLastPage }) => {
  const groupedImages = [];
  for (let i = 0; i < images.length; i += 2) {
    groupedImages.push(images.slice(i, i + 2)); // Group images into rows of 2
  };

  return (
    <Page style={styles.page}>
      {groupedImages.map((row, rowIndex) => (
        <View style={styles.row} key={rowIndex}>
          {row.map((img, imgIndex) => (
            <View style={styles.frame} key={imgIndex}>
              <Image src={img.thumbnailUrl} style={styles.image} />
              <Text style={{ textAlign: "center", marginTop: 10, fontSize: '10' }}>
                {img.title}
              </Text>
            </View>
          ))}
        </View>
      ))}

      {isLastPage && (
        <View style={{ padding: 15 }}>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, officia? Sequi aperiam ut error fuga dicta cupiditate sunt voluptate laudantium quas nesciunt beatae expedita cumque hic officia, pariatur, optio nihil.
          </Text>
        </View>
      )}

      <View style={styles.footer}>
        <View style={styles.footerColumn}>
          <Text render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
        </View>
        <View style={[styles.footerColumn, { textAlign: "center" }]}>
          <Text>{companyName}</Text>
          <Text>Copyright ©2024 - All Rights Reserved</Text>
        </View>
        <View style={[styles.footerColumn, { textAlign: "right" }]}>
          <Image src={companyLogo} style={styles.logo} />
        </View>
      </View>
    </Page>
  );
};

const SignaturePage = () => (
  <Page style={styles.page}>
    <View style={styles.signaturePage}>
      <Text style={styles.signatureText}>
        Signature: Company Full Name
      </Text>
      <Text>Thank you for allowing us to be part of your diagnostic team.</Text>
      <Text>Veterinary World Radiology Inc.</Text>
      <Text>Copyright ©2024 - All Rights Reserved</Text>
    </View>
    <View style={styles.footer}>
      <View style={styles.footerColumn}>
        <Text render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
      </View>
      <View style={[styles.footerColumn, { textAlign: "center" }]}>
        <Text>{companyName}</Text>
        <Text>Copyright ©2024 - All Rights Reserved</Text>
      </View>
      <View style={[styles.footerColumn, { textAlign: "right", marginRight: "0" }]}>
        <Image src={companyLogo} style={styles.logo} />
      </View>
    </View>
  </Page>
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
        <PageContent
          key={index}
          images={pageImages}
          isLastPage={index === pages.length - 1} 
        />
      ))}
      <SignaturePage />
    </Document>
  );
};

export default ReportDocument;