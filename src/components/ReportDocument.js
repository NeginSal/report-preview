import React from "react";
import { Document, Page, Text, View, Image, StyleSheet } from "@react-pdf/renderer";

const companyName = "Veterinary World Radiology Inc.";
const companyLogo = "https://via.assets.so/img.jpg?w=400&h=150&tc=#006666&bg=#cce6ff";

const styles = StyleSheet.create({
  page: {
    padding: 15,
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
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
  footerColumn: {
    width: "33.33%",
    alignItems: "center",
  },
  header: {
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1pt solid #000",
    paddingBottom: 5,
  },
  headerColumn: {
    width: "33.33%",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 8,
    textAlign: "left",
    fontWeight: "bold",
  },
  headerText: {
    fontSize: 6,
    textAlign: "left",
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
  textSection: {
    fontSize: 10,
    marginTop: 20,
  },
});

const PageContent = ({ images, isFirstPage }) => {
  const groupedImages = [];
  for (let i = 0; i < images.length; i += 2) {
    groupedImages.push(images.slice(i, i + 2)); // Group images into rows of 2
  }

  return (
    <Page style={styles.page}>
      {/* Header */}
      {isFirstPage && (
        <View style={styles.header}>
          <View style={styles.headerColumn}>
            <Text style={styles.headerTitle}>Report Requested By</Text>
            <Text style={styles.headerText}>Sandy Lane Pet Clinic</Text>
            <Text style={styles.headerText}>Dr. Lee</Text>
          </View>
          <View style={styles.headerColumn}>
            <Image src={companyLogo} style={styles.logo} />
          </View>
          <View style={styles.headerColumn}>
            <Text style={styles.headerTitle}>Report Provided By</Text>
            <Text style={styles.headerText}>CompanyName@gmail.com</Text>
            <Text style={styles.headerText}></Text>
          </View>
        </View>
      )}

      {/* Content */}
      {isFirstPage ? (
        <View style={styles.textSection}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum alias, nobis enim sint, cum veniam pariatur in soluta ullam rerum autem dignissimos saepe earum neque modi labore ipsa minima perspiciatis.
            Iusto, dignissimos at voluptatem eos commodi doloremque sint, consequuntur ipsum odio tenetur aperiam maxime odit modi sequi nam? Ipsam tempore sunt reprehenderit deserunt animi corporis perferendis quo. Ratione, dolore minus!
            Consectetur, veritatis maiores? Minima eius eos alias ab et iure odio magnam eligendi. Adipisci facilis neque officiis? Laborum, quaerat! Voluptatibus architecto laborum natus itaque ad eos iure sunt ullam error?
            Alias quasi nulla, quisquam natus velit consequuntur ratione temporibus pariatur eum enim fugiat recusandae voluptatibus non accusamus, sunt aut? Delectus ut consequuntur reiciendis aut quas vel ipsum voluptatem dicta animi.
            Adipisci blanditiis modi voluptate corporis, neque sapiente quis culpa. Minima dolores fugit tenetur nesciunt quas ipsum, consectetur neque illo voluptatem eos vitae ipsam quos non dignissimos, reiciendis provident id voluptates.
            Autem dolores sint nam nemo quam aliquid, quas quia tenetur cum. Quaerat quasi numquam aliquam sunt adipisci veritatis quia est rerum delectus at earum, odit perspiciatis iure a facere libero!
          </Text>
        </View>
      ) : (
        groupedImages.map((row, rowIndex) => (
          <View style={styles.row} key={rowIndex}>
            {row.map((img, imgIndex) => (
              <View style={styles.frame} key={imgIndex}>
                <Image src={img.thumbnailUrl} style={styles.image} />
                <Text style={{ textAlign: "center", marginTop: 10, fontSize: 10 }}>
                  {img.title}
                </Text>
              </View>
            ))}
          </View>
        ))
      )}

      {/* Footer */}
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
      <Text style={styles.signatureText}>Signature: Company Full Name</Text>
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
      <View style={[styles.footerColumn, { textAlign: "right" }]}>
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
      <PageContent images={[]} isFirstPage={true} />
      {pages.map((pageImages, index) => (
        <PageContent key={index} images={pageImages} isFirstPage={false} />
      ))}
      <SignaturePage />
    </Document>
  );
};

export default ReportDocument;