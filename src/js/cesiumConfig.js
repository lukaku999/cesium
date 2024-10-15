import { Cartesian3, Math as CesiumMath } from "cesium";

const targetLocation = {
  destination: Cartesian3.fromDegrees(
    9.041914842288406,
    48.833119059728752,
    50
  ),
  orientation: {
    heading: CesiumMath.toRadians(0),
    pitch: CesiumMath.toRadians(-15),
  },
};

const url = {
  treeGlb: "./glbData/tree.glb",
};

export { targetLocation, url };
