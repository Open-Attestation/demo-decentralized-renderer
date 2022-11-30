import ReactDOM from "react-dom/client";
import {
  FrameConnector,
  FrameActions,
  HostActionsHandler,
  renderDocument,
} from "@govtechsg/decentralized-renderer-react-components";
const EBL_V2 = "/ebl-transferable-v2.json"; // use ebl-cnm-v2.json to see another renderer at work

// FrameConnector example
// https://github.com/Open-Attestation/decentralized-renderer-react-components#frameconnector

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const init = (oaDocument: any) => {
  const dispatchActions = (action: FrameActions) => {
    if (action.type === "UPDATE_HEIGHT") {
      document
        .getElementById("iframe")!
        .setAttribute("height", `${window.innerHeight}px`);
    }
  };

  const onConnected = (frame: HostActionsHandler) => {
    frame(
      renderDocument({
        document: oaDocument, // by right document should be wrapped, for easy demo sake let's just passed raw document
      }),
    );
  };

  root.render(
    <FrameConnector
      style={{ width: "100%", border: "0px" }}
      source={oaDocument.$template.url}
      dispatch={dispatchActions}
      onConnected={onConnected}
    />,
  );
};

fetch(EBL_V2)
  .then((response) => response.json())
  .then((oaDocument) => {
    init(oaDocument);
  });
