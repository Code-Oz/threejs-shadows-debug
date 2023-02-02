import { commonGuiFactory } from "../common-gui-factory";

const updateShadowCamera = (light) => {
  light.shadow.camera.updateProjectionMatrix();
};

const propertyTop = "top";
const topMin = -10;
const topMax = 10;
const topStep = 0.1;

export const topGUI = (folder, object, label = propertyTop) => {
  return commonGuiFactory(propertyTop)(folder, object.shadow.camera, label)
    .min(topMin)
    .max(topMax)
    .step(topStep)
    .onChange(() => updateShadowCamera(object));
};

const propertyBottom = "bottom";
const bottomMin = -10;
const bottomMax = 10;
const bottomStep = 0.1;

export const bottomGUI = (folder, object, label = propertyBottom) => {
  return commonGuiFactory(propertyBottom)(folder, object.shadow.camera, label)
    .min(bottomMin)
    .max(bottomMax)
    .step(bottomStep)
    .onChange(() => updateShadowCamera(object));
};

const propertyRight = "right";
const rightMin = -10;
const rightMax = 10;
const rightStep = 0.1;

export const rightGUI = (folder, object, label = propertyRight) => {
  return commonGuiFactory(propertyRight)(folder, object.shadow.camera, label)
    .min(rightMin)
    .max(rightMax)
    .step(rightStep)
    .onChange(() => updateShadowCamera(object));
};

const propertyleft = "left";
const leftMin = -10;
const leftMax = 10;
const leftStep = 0.1;

export const leftGUI = (folder, object, label = propertyleft) => {
  return commonGuiFactory(propertyleft)(folder, object.shadow.camera, label)
    .min(leftMin)
    .max(leftMax)
    .step(leftStep)
    .onChange(() => updateShadowCamera(object));
};
