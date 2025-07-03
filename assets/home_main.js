const imageContainer = document.querySelector(".image-container");

const searchParams = new URLSearchParams(window.location.search);
const paraimgurl = searchParams.get("url");

const panoimg = paraimgurl ?? "../assets/images/image1.jpeg";
const panoramaImage = new PANOLENS.ImagePanorama(panoimg);

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: false,
});

viewer.add(panoramaImage);

// router without query
const vidroutemain = "player/video.html";
const imgroutemain = "player/photo.html";

// router with query
const vidroute = "player/video.html?url=";
const imgroute = "player/photo.html?url=";

function updateVidUrl() {
  const urlInput = document.getElementById("urlInput");
  const newUrl = urlInput.value ? vidroute + urlInput.value : vidroutemain;
  window.open(newUrl, "_blank");
}

function updateImgUrl() {
  const urlInput = document.getElementById("urlInput");
  const newUrl = urlInput.value ? imgroute + urlInput.value : imgroutemain;
  window.open(newUrl, "_blank");
}
