import { isVisibleGUI } from "../gui-factory/gui-property/is-visible-gui";
import { metalnessAndRoughnessGUI } from "../gui-factory/gui-property/metalness-roughness-gui";

export const meshCasterGuiFactory = (folder, mesh) => {
  isVisibleGUI(folder, mesh);
};

export const meshReceiverGuiFactory = (folder, mesh) => {
  isVisibleGUI(folder, mesh);
};

export const meshCommonMaterialGuiFactory = (folder, material) => {
  metalnessAndRoughnessGUI(folder, material);
};
