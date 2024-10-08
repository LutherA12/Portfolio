import { React, useState } from "react";
import { Page, Document } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

export default function PDFView({ file }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  const onDocLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const buttonStyles = {
    borderRadius: "5px",
    padding: "6px",
    backgroundColor: "#747572",
    color: "#001030",
    cursor: "pointer",
  };

  const buttons = [
    <button
      style={buttonStyles}
      type="button"
      disabled={pageNumber >= 1}
      onClick={() => setPageNumber(pageNumber + 1)}
    >
      Next
    </button>,
    <button
      style={buttonStyles}
      type="button"
      disabled={pageNumber <= 1}
      onClick={() => setPageNumber(pageNumber - 1)}
    >
      Previous
    </button>,
  ];

  const scaleButtons = [
    <button
      style={buttonStyles}
      type="button"
      onClick={() => setScale(scale + 0.1)}
    >
      Zoom In
    </button>,
    <button
      style={buttonStyles}
      type="button"
      onClick={() => setScale(scale - 0.1)}
    >
      Zoom Out
    </button>,
  ];

  return (
    <div>
      <Document file={file} onLoadSuccess={onDocLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <div>
        {buttons.map((buttons, key) => {
          return <div key={key}>{buttons}</div>;
        })}
      </div>
      {scaleButtons.map((buttons, key) => {
        return <div key={key}>{buttons}</div>;
      })}
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}
