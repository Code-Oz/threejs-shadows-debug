import {
  DIRECTIONNAL_LIGHT_SHADOWS_FAR_DEFAULT,
  DIRECTIONNAL_LIGHT_SHADOWS_NEAR_DEFAULT,
} from "../../config";
import { commonGuiFactory } from "../common-gui-factory";

const updateShadowCamera = (light) => {
  light.shadow.camera.updateProjectionMatrix();
};

const propertyShadowNear = "near";
const shadowNearMin = 0.1;
const shadowNearMax = 20;
const shadowNearStep = 1;

export const shadowNearGUI = (folder, object, label = propertyShadowNear) => {
  return commonGuiFactory(propertyShadowNear)(
    folder,
    object.shadow.camera,
    label
  )
    .min(shadowNearMin)
    .max(shadowNearMax)
    .step(shadowNearStep)
    .onChange((value) => {
      updateShadowCamera(object, propertyShadowNear, value);
    });
};

const propertyShadowFar = "far";
const shadowFarMin = 0.1;
const shadowFarMax = 20;
const shadowFarStep = 1;

export const shadowFarGUI = (folder, object, label = propertyShadowFar) => {
  return commonGuiFactory(propertyShadowFar)(
    folder,
    object.shadow.camera,
    label
  )
    .min(shadowFarMin)
    .max(shadowFarMax)
    .step(shadowFarStep)
    .onChange(() => {
      updateShadowCamera(object);
    });
};
