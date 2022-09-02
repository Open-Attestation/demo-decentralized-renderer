const OA_DOCUMENT_PATH = "./oa-document-v3-unsigned.json"; // tweak to see difference between OA v2 and v3 document rendering

const init = (oaDocument) => {
  let frame;
  const iframe = document.getElementById("iframe");
  const viewSelector = document.getElementById("view-selector");

  const renderDocumentAction = {
    type: "RENDER_DOCUMENT",
    payload: {
      document: oaDocument,
    },
  };

  const getTemplatesAction = {
    type: "GET_TEMPLATES",
    payload: oaDocument,
  };

  const renderViewSelector = () => {
    if (!frame) console.warn("frame connection not established.");
    frame.dispatch(getTemplatesAction).then((templates) => {
      templates.forEach((tab, index) => {
        const btn = document.createElement("button");
        btn.innerHTML = tab.label;
        btn.id = `selector-${tab.id}`;
        btn.onclick = () => {
          frame.dispatch({
            type: "SELECT_TEMPLATE",
            payload: tab.id,
          });
        };
        viewSelector.appendChild(btn);
      });
    });
  };

  const renderDocument = () => {
    if (!frame) console.warn("frame connection not established.");
    frame.dispatch(renderDocumentAction);
  };

  const connection = Penpal.connectToChild({
    iframe,
    methods: {
      dispatch: (action) => {
        const { type, payload } = action;
        if (type === "UPDATE_HEIGHT") {
          iframe.height = payload;
        }
      },
    },
  });

  connection.promise.then((child) => {
    frame = child;
    renderViewSelector();
    renderDocument();
  });
};

// https://github.com/tc39/proposal-import-assertions
// direct import assertion of json not supported in most browsers yet, so use fetch to demostrate first
// for demo purposes, we are using unsigned documents. ideally they should be signed and signature verification should happen during user interaction of uploading OA document.
fetch(OA_DOCUMENT_PATH)
  .then((response) => response.json())
  .then((oaDocument) => {
    init(oaDocument);
  });
