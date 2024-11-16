import React from "react";

const ImageList = ({ images, onGenerateReport }) => {
  return (
    <div className="row p-3">
      {images.map((image) => (
        <div key={image.id} className="col-6 col-md-3 col-lg-2 text-center p-2">
          <img src={image.thumbnailUrl} alt={image.title} className="rounded img-fluid" />
          <p>{image.title}</p>
        </div>
      ))}
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, officia? Sequi aperiam ut error fuga dicta cupiditate sunt voluptate laudantium quas nesciunt beatae expedita cumque hic officia, pariatur, optio nihil.
      </div>
      <div className="my-2 text-center">
        <button type="button" className="btn btn-info" onClick={onGenerateReport}>Generate Report</button>
      </div>
    </div>
  );
};

export default ImageList;