import { commonGuiFactory } from "../common-gui-factory";

const propertyCastShadowIntensity = "castShadow";

export const castShadowGUI = (
  folder,
  object,
  label = propertyCastShadowIntensity
) => {
  return commonGuiFactory(propertyCastShadowIntensity)(folder, object, label);
};

const propertyReceiveShadowIntensity = "castShadow";

export const receiveShadowGUI = (
  folder,
  object,
  label = propertyReceiveShadowIntensity
) => {
  return commonGuiFactory(propertyReceiveShadowIntensity)(
    folder,
    object,
    label
  );
};
