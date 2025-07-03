const videoContainer = document.querySelector(".video-container");

const searchParams = new URLSearchParams(window.location.search);
const paravidurl = searchParams.get("url");
const parashowcontroller = searchParams.get("hidemenu");
const paraautorotate = searchParams.get("autorotate");
const paraautorotatespeed = searchParams.get("autorotatespeed");
const paraviewIndicator = searchParams.get("viewindicator");

const panovid = paravidurl ?? "../assets/images/vr.mp4";
const panoramaVideo = new PANOLENS.VideoPanorama(panovid);

const viewer = new PANOLENS.Viewer({
  container: videoContainer,
  autoRotate: paraautorotate,
  autoRotateSpeed: paraautorotatespeed ?? 0.3,
  controlBar: !parashowcontroller,
  viewIndicator: paraviewIndicator,
});

viewer.add(panoramaVideo);