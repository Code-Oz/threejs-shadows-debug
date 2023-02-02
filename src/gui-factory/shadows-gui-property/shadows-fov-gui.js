import { commonGuiFactory } from "../common-gui-factory";

const updateShadowCamera = (light) => {
  light.shadow.camera.updateProjectionMatrix();
};

const propertyFov = "fov";
const fovMin = 0.1;
const fovMax = 50;
const fovStep = 1;

export const fovGUI = (folder, object, label = propertyFov) => {
  return commonGuiFactory(propertyFov)(folder, object.shadow.camera, label)
    .min(fovMin)
    .max(fovMax)
    .step(fovStep)
    .onChange(() => updateShadowCamera(object));
};
