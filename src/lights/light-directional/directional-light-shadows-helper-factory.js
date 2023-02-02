import * as THREE from "three";
import { DIRECTIONNAL_LIGHT_SHADOWS_HELPER_IS_VISIBLE_DEFAULT } from "../../config";

export const directionalLightShadowsHelperFactory = (directionalLight) => {
  const directionalLightHelper = new THREE.CameraHelper(
    directionalLight.shadow.camera
  );
  directionalLightHelper.visible =
    DIRECTIONNAL_LIGHT_SHADOWS_HELPER_IS_VISIBLE_DEFAULT;

  return directionalLightHelper;
};
