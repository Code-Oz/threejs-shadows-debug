import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import { addToSceneWrapper } from "./add-to-scene";
import { defaultMaterial, IS_SHADOWS_ENABLED, sizes } from "./config";
import { axesBuilderFactory } from "./helper-factory/axes-builder-factory";
import { directionalLightHelperFactory } from "./lights/light-directional/directional-light-helper-factory";
import { createDebugGUI } from "./gui-factory/create-gui";
import {
  directionalLightGuiFactory,
  directionalLightHelperGuiFactory,
  directionalLightShadowsHelperGuiFactory,
} from "./lights/light-directional/directionnal-light-gui";
import { createAllMesh } from "./mesh-factory/create-all-mesh";
import {
  meshCommonMaterialGuiFactory,
  meshCasterGuiFactory,
  meshReceiverGuiFactory,
} from "./mesh-factory/mesh-gui";
import { sportLightFactory } from "./lights/light-spot/spot-light-factory";
import {
  spotAreaHelperGuiFactory,
  spotLightGuiFactory,
  spotLightShadowsHelperGuiFactory,
} from "./lights/light-spot/spot-light-gui";
import { spotLightHelperFactory } from "./lights/light-spot/spot-light-helper-factory";
import { directionalLightFactory } from "./lights/light-directional/directional-light-factory";
import { directionalLightShadowsHelperFactory } from "./lights/light-directional/directional-light-shadows-helper-factory";
import { spotLightShadowsHelperFactory } from "./lights/light-spot/spot-light-shadows-helper-factory";
/**
 * Base
 */

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

const addObjectToScene = addToSceneWrapper(scene);
addObjectToScene(axesBuilderFactory());

// Mesh
const [cube, floor, torus, sphere] = addObjectToScene(createAllMesh());

// Debug
const {
  folderDirectionnalLight,
  folderMeshCube,
  folderMeshFloor,
  folderMeshTorus,
  folderMeshSphere,
  folderMeshCommon,
  folderSpotLight,
} = createDebugGUI();

// Global Mesh like metalness/roughness
meshCommonMaterialGuiFactory(folderMeshCommon, defaultMaterial);
meshCasterGuiFactory(folderMeshCube, cube);
meshReceiverGuiFactory(folderMeshFloor, floor);
meshCasterGuiFactory(folderMeshTorus, torus);
meshCasterGuiFactory(folderMeshSphere, sphere);

// DirectionalLight
// Emit in only one direction to the 'target point' (default is (0,0,0))
const [directionalLight] = addObjectToScene(directionalLightFactory());
directionalLightGuiFactory(folderDirectionnalLight, directionalLight);

const directionalLightHelper = addObjectToScene(
  directionalLightHelperFactory(directionalLight)
);
directionalLightHelperGuiFactory(
  folderDirectionnalLight,
  directionalLightHelper
);

const directionalLightShadowsHelper = addObjectToScene(
  directionalLightShadowsHelperFactory(directionalLight)
);
directionalLightShadowsHelperGuiFactory(
  folderDirectionnalLight,
  directionalLightShadowsHelper
);
spotLightShadowsHelperFactory;

// SpotLight
const [spotLight] = addObjectToScene(sportLightFactory());
spotLightGuiFactory(folderSpotLight, spotLight);

const spotLightHelper = addObjectToScene(spotLightHelperFactory(spotLight));
spotAreaHelperGuiFactory(folderSpotLight, spotLightHelper);

const spotLightShadowsHelper = addObjectToScene(
  spotLightShadowsHelperFactory(spotLight)
);
spotLightShadowsHelperGuiFactory(folderSpotLight, spotLightShadowsHelper);

/**
 * Sizes
 */
window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 2;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.shadowMap.enabled = IS_SHADOWS_ENABLED;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
//renderer.shadowMap.type = THREE.BasicShadowMap
//renderer.shadowMap.type = THREE.PCFShadowMap
//renderer.shadowMap.type = THREE.VSMShadowMap
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update controls
  controls.update();

  // Update Helper
  directionalLightHelper.update();
  directionalLightShadowsHelper.update();
  spotLightHelper.update();
  spotLightShadowsHelper.update();

  // Update mesh rotation
  cube.rotation.x = 0.15 * elapsedTime;
  cube.rotation.y = 0.1 * elapsedTime;
  sphere.rotation.x = 0.15 * elapsedTime;
  sphere.rotation.y = 0.1 * elapsedTime;
  torus.rotation.x = 0.15 * elapsedTime;
  torus.rotation.y = 0.1 * elapsedTime;

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
