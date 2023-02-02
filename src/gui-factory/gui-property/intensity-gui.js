import { commonGuiFactory } from "../common-gui-factory";

const propertyIntensity = "intensity";
const intensityMin = 0;
const intensityMax = 10;
const intensityStep = 0.01;

export const intensityGUI = (folder, object, label = propertyIntensity) => {
  return commonGuiFactory(propertyIntensity)(folder, object, label)
    .min(intensityMin)
    .max(intensityMax)
    .step(intensityStep);
};
