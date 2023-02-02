import {
  DIRECTIONNAL_LIGHT_SHADOWS_HEIGHT_DEFAULT,
  DIRECTIONNAL_LIGHT_SHADOWS_WIDTH_DEFAULT,
} from "../../config";
import { commonGuiFactory } from "../common-gui-factory";

const updateShadowMapSize = (light, props, value) => {
  light.shadow.map = null;
  light.shadow.mapSize[props] = value;
};

const propertyShadowWidth = "width";
const shadowWidthMin = 256;
const shadowWidthMax = 4096;
const shadowWidthStep = 256;

export const shadowWidthGUI = (folder, object, label = propertyShadowWidth) => {
  const params = {
    [propertyShadowWidth]: DIRECTIONNAL_LIGHT_SHADOWS_WIDTH_DEFAULT,
  };
  return commonGuiFactory(propertyShadowWidth)(folder, params, label)
    .min(shadowWidthMin)
    .max(shadowWidthMax)
    .step(shadowWidthStep)
    .onChange((value) => {
      updateShadowMapSize(object, propertyShadowWidth, value);
    });
};

const propertyShadowHeight = "height";
const shadowHeightMin = 256;
const shadowHeightMax = 4096;
const shadowHeightStep = 256;

export const shadowHeightGUI = (
  folder,
  object,
  label = propertyShadowHeight
) => {
  const params = {
    [propertyShadowHeight]: DIRECTIONNAL_LIGHT_SHADOWS_HEIGHT_DEFAULT,
  };
  return commonGuiFactory(propertyShadowHeight)(folder, params, label)
    .min(shadowHeightMin)
    .max(shadowHeightMax)
    .step(shadowHeightStep)
    .onChange((value) => {
      updateShadowMapSize(object, propertyShadowHeight, value);
    });
};

const propertyShadowRadius = "radius";
const shadowRadiusMin = 0;
const shadowRadiusMax = 5;
const shadowRadiusStep = 0.01;

export const shadowRadiusGUI = (
  folder,
  object,
  label = propertyShadowRadius
) => {
  return commonGuiFactory(propertyShadowRadius)(folder, object.shadow, label)
    .min(shadowRadiusMin)
    .max(shadowRadiusMax)
    .step(shadowRadiusStep);
};
