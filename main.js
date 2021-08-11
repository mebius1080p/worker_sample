document.addEventListener(
  "DOMContentLoaded",
  () => {
    worker1();
    worker2();
  },
  false
);
function worker1() {
  const debugElm1 = document.getElementById("debug1");
  const buttonElm1 = document.getElementById("button1");
  const outputElm1 = document.getElementById("output1");
  if (checkWorker() === true) {
    debugElm1.textContent = "worker available";

    //worker 設定
    const wk1 = new Worker("worker.js");
    wk1.addEventListener(
      "message",
      (event) => {
        outputElm1.textContent = event.data;
      },
      true
    );
    wk1.addEventListener(
      "error",
      () => {
        console.log("error occured");
      },
      true
    );

    buttonElm1.addEventListener(
      "click",
      () => {
        wk1.postMessage("マッチョ");
      },
      false
    );
  } else {
    debugElm1.textContent = "You can't use Worker";
  }
}
function worker2() {
  const debugElm2 = document.getElementById("debug2");
  const buttonElm2 = document.getElementById("button2");
  const outputElm2 = document.getElementById("output2");
  if (checkWorker() === true) {
    debugElm2.textContent = "worker available";

    const wk2 = new Worker("worker2.js");
    wk2.onmessage = (event) => {
      outputElm2.textContent = event.data;
    };
    buttonElm2.addEventListener(
      "click",
      () => {
        wk2.postMessage("マッチョ"); //実行トリガー 渡すデータがないときは空文字で
      },
      false
    );
  } else {
    debugElm2.textContent = "You can't use Worker";
  }
}
function checkWorker() {
  if (window.Worker) {
    return true;
  } else {
    return false;
  }
}
