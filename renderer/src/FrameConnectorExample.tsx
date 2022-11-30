import {
  FrameConnector,
  FrameActions,
  HostActionsHandler,
  renderDocument,
} from "@govtechsg/decentralized-renderer-react-components";
import EBL_V2 from "./fixture/ebl-transferable-v2.json"; // use ebl-cnm-v2.json and hard refresh to see another renderer at work

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
      document: EBL_V2 as any, // by right document should be wrapped, for easy demo sake let's just passed raw document
    }),
  );
};

export const FrameConnectorExample = () => (
  // FrameConnector example
  // https://github.com/Open-Attestation/decentralized-renderer-react-components#frameconnector
  <FrameConnector
    style={{ width: "100%", border: "0px" }}
    source={EBL_V2.$template.url}
    dispatch={dispatchActions}
    onConnected={onConnected}
  />
);
