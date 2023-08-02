import { castShadowGUI } from "../../gui-factory/shadows-gui-property/shadows-cast-receive-gui";
import { isVisibleGUI } from "../../gui-factory/gui-property/is-visible-gui";
import { intensityGUI } from "../../gui-factory/gui-property/intensity-gui";
import { positionGui } from "../../gui-factory/gui-property/position-gui";
import {
  shadowHeightGUI,
  shadowWidthGUI,
} from "../../gui-factory/shadows-gui-property/shadows-width-height-radius-gui";
import { fovGUI } from "../../gui-factory/shadows-gui-property/shadows-fov-gui";
import {
  shadowNearGUI,
  shadowFarGUI,
} from "../../gui-factory/shadows-gui-property/shadows-camera-gui";

export const spotLightGuiFactory = (folder, light) => {
  isVisibleGUI(folder, light);
  castShadowGUI(folder, light);
  intensityGUI(folder, light);
  positionGui(folder, light.position);
  positionGui(folder, light.target.position, "target");

  shadowWidthGUI(folder, light, "shadows width");
  shadowHeightGUI(folder, light, "shadows height");
  shadowNearGUI(folder, light, "shadows near");
  shadowFarGUI(folder, light, "shadows far");
  fovGUI(folder, light, "shadows fov");
};

export const spotAreaHelperGuiFactory = (folder, lightHelper) => {
  isVisibleGUI(folder, lightHelper, "helper visibility");
};

export const spotLightShadowsHelperGuiFactory = (folder, lightHelper) => {
  isVisibleGUI(folder, lightHelper, "shadows helper visibility");
};
