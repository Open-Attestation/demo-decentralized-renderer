import React from "react";
import ReactDOM from "react-dom/client";
import { FrameConnectorExample } from "./FrameConnectorExample";
import { FramedDocumentRendererExample } from "./FramedDocumentRendererExample";
import "./index.css";

const IS_FRAME_DOCUMENT_RENDERER = true; // toggle to see the available examples

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  IS_FRAME_DOCUMENT_RENDERER ? (
    <FramedDocumentRendererExample />
  ) : (
    <FrameConnectorExample />
  ),
);
