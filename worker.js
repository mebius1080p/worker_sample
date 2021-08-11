addEventListener(
  "message",
  (event) => {
    //const aa = new XYZ();わざとエラー
    postMessage(event.data + "コペン");
  },
  false
);
