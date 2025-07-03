const imageContainer = document.querySelector(".image-container");

const searchParams = new URLSearchParams(window.location.search);
const paraimgurl = searchParams.get("url");
const parashowcontroller = searchParams.get("hidemenu");
const paraautorotate = searchParams.get("autorotate");
const paraautorotatespeed = searchParams.get("autorotatespeed");
const paraviewIndicator = searchParams.get("viewindicator");

const panoimg = paraimgurl ?? "../assets/images/image1.jpeg";
const panoramaImage = new PANOLENS.ImagePanorama(panoimg);

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: paraautorotate,
  autoRotateSpeed: paraautorotatespeed ?? 0.3,
  controlBar: !parashowcontroller,
  viewIndicator: paraviewIndicator,
});

viewer.add(panoramaImage);