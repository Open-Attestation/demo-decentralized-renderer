import React from "react";
import ReactDOM from "react-dom/client";
import { FramedDocumentRenderer } from "@govtechsg/decentralized-renderer-react-components";
import "./index.css";

// FramedDocumentRenderer example
// https://github.com/Open-Attestation/decentralized-renderer-react-components#frameddocumentrenderer

const TemplateA: React.FunctionComponent<any> = ({ document }) => {
  const issuer = document.issuers[0].name;

  return (
    <>
      <h3>Template A</h3>
      <hr />
      <h1>{issuer}</h1>
    </>
  );
};

const TemplateB: React.FunctionComponent<any> = ({ document }) => {
  const { recipient, licenseNumber } = document;

  return (
    <>
      <h3>Template B</h3>
      <hr />
      <h1>{recipient.name}</h1>
      <p>{licenseNumber}</p>
    </>
  );
};

const TemplateC: React.FunctionComponent<any> = ({ document }) => {
  const issuer = document.issuer.name;

  return (
    <>
      <h3>Template C</h3>
      <hr />
      <h1>{issuer}</h1>
    </>
  );
};

const TemplateD: React.FunctionComponent<any> = ({ document }) => {
  const { name, licenseNumber } = document.credentialSubject;

  return (
    <>
      <h3>Template D</h3>
      <hr />
      <h1>{name}</h1>
      <p>{licenseNumber}</p>
    </>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

/*
 * templateRegistry
 * Accept an object consisting of Layouts. Within each Layout, they can hold an array of Views. Each View is a customisable template, rendering out OA document data to each use case.
 */
root.render(
  <FramedDocumentRenderer
    templateRegistry={{
      OA_V2: [
        {
          id: "view_a",
          label: "View A",
          template: TemplateA,
        },
        {
          id: "view_b",
          label: "View B",
          template: TemplateB,
        },
      ],
      OA_V3: [
        {
          id: "view_a",
          label: "View A",
          template: TemplateC,
        },
        {
          id: "view_b",
          label: "View B",
          template: TemplateD,
        },
      ],
    }}
  />,
);
