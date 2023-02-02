import { castShadowGUI } from "../../gui-factory/shadows-gui-property/shadows-cast-receive-gui";
import {
  shadowHeightGUI,
  shadowRadiusGUI,
  shadowWidthGUI,
} from "../../gui-factory/shadows-gui-property/shadows-width-height-radius-gui";
import { intensityGUI } from "../../gui-factory/gui-property/intensity-gui";
import { isVisibleGUI } from "../../gui-factory/gui-property/is-visible-gui";
import { positionGui } from "../../gui-factory/gui-property/position-gui";
import {
  topGUI,
  bottomGUI,
  rightGUI,
  leftGUI,
} from "../../gui-factory/shadows-gui-property/shadows-top-right-bottom-left-gui";
import {
  shadowNearGUI,
  shadowFarGUI,
} from "../../gui-factory/shadows-gui-property/shadows-camera-gui";

export const directionalLightGuiFactory = (folder, light) => {
  castShadowGUI(folder, light);
  isVisibleGUI(folder, light);
  intensityGUI(folder, light);
  shadowWidthGUI(folder, light, "shadows width");
  shadowHeightGUI(folder, light, "shadows height");
  shadowNearGUI(folder, light, "shadows near");
  shadowFarGUI(folder, light, "shadows far");
  shadowRadiusGUI(folder, light, "shadows radius");
  topGUI(folder, light, "shadows top");
  bottomGUI(folder, light, "shadows bot");
  rightGUI(folder, light, "shadows right");
  leftGUI(folder, light, "shadows left");
  positionGui(folder, light.position);
  positionGui(folder, light.target.position, "target");
};

export const directionalLightHelperGuiFactory = (folder, lightHelper) => {
  isVisibleGUI(folder, lightHelper, "helper visibility");
};

export const directionalLightShadowsHelperGuiFactory = (
  folder,
  lightHelper
) => {
  isVisibleGUI(folder, lightHelper, "shadows helper visibility");
};
