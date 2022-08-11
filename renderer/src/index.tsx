import React from "react";
import ReactDOM from "react-dom/client";
import { FramedDocumentRenderer } from "@govtechsg/decentralized-renderer-react-components";
import "./index.css";

const TemplateA: React.FunctionComponent<any> = ({ document }) => {
  const issuer = document.issuers[0].name;

  return (
    <>
      <h1>Template A</h1>
      <h2>{issuer}</h2>
      <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati cupiditate non provident,
        similique sunt in culpa qui officia deserunt mollitia animi, id est
        laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
        distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
        cumque nihil impedit quo minus id quod maxime placeat facere possimus,
        omnis voluptas assumenda est, omnis dolor repellendus.
      </p>
      <p>
        Temporibus autem quibusdam et aut officiis debitis aut rerum
        necessitatibus saepe eveniet ut et voluptates repudiandae sint et
        molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
        delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
        perferendis doloribus asperiores repellat.
      </p>
    </>
  );
};

const TemplateB: React.FunctionComponent<any> = ({ document }) => {
  const recipient = document.recipient;

  return (
    <>
      <h1>Template B</h1>
      <h2>{recipient}</h2>
    </>
  );
};

const TemplateC: React.FunctionComponent<any> = ({ document }) => {
  const issuer = document.issuer.name;

  return (
    <>
      <h1>Template C</h1>
      <h2>{issuer}</h2>
      <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati cupiditate non provident,
        similique sunt in culpa qui officia deserunt mollitia animi, id est
        laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
        distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
        cumque nihil impedit quo minus id quod maxime placeat facere possimus,
        omnis voluptas assumenda est, omnis dolor repellendus.
      </p>
      <p>
        Temporibus autem quibusdam et aut officiis debitis aut rerum
        necessitatibus saepe eveniet ut et voluptates repudiandae sint et
        molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
        delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
        perferendis doloribus asperiores repellat.
      </p>
    </>
  );
};

const TemplateD: React.FunctionComponent<any> = ({ document }) => {
  const recipient = document.credentialSubject.name;

  return (
    <>
      <h1>Template D</h1>
      <h2>{recipient}</h2>
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
