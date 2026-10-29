import QRCode from "qrcode";

const hash = window.location.hash.slice(1);
const params = new URLSearchParams(hash);
const i = params.get("i");
const d = params.get("d");

const linkContainer = document.getElementById("link");
const qrInfoContainer = document.getElementById("qr-info");
const errorBox = document.getElementById("error-box");
const qrCanvas = document.getElementById("qr");

if (i && d) {
  const url = `comapeo://invite/?url=${location.href}`;
  loadCanvas(url);
} else {
  show(errorBox);
}

/**
 * @param {string} url
 */
async function loadCanvas(url) {
  linkContainer.href = url;

  try {
    await QRCode.toCanvas(qrCanvas, url);
    // Delete the custom size so we can scale up with CSS
    qrCanvas.style.width = "";
    qrCanvas.style.height = "";

    show(qrInfoContainer);
    // Try loading the URL in the app instead
    //window.location.href = url;
  } catch (e) {
    show(errorBox);
    console.error(e);
  }
}

/**
 *
 * @param {HTMLElement|null} element
 */
function show(element) {
  if (element) element.style.display = "block";
}
