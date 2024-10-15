// The URL on your server where CesiumJS's static files are hosted.
window.CESIUM_BASE_URL = "/";

import { Ion, Viewer } from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import { targetLocation, url } from "./js/cesiumConfig";
import { trees } from "./js/coordinates";
import { createModel } from "./js/cesiumFunc";
import treeGlb from "./glbData/tree.glb";

// Your access token can be found at: https://ion.cesium.com/tokens.
// Replace `your_access_token` with your Cesium ion access token.

Ion.defaultAccessToken = process.env.TOKEN;

console.log(trees, "trees");

// Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
const viewer = new Viewer("cesiumContainer");

trees.features.forEach((feature) => {
  createModel(
    viewer,
    treeGlb,
    feature.geometry.coordinates[0],
    feature.geometry.coordinates[1],
    0
  );
});
// Fly the camera to San Francisco at the given longitude, latitude, and height.
viewer.camera.flyTo(targetLocation);
