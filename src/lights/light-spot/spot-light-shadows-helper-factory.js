import * as THREE from "three";
import { SPOT_LIGHT_SHADOWS_HELPER_IS_VISIBLE_DEFAULT } from "../../config";

export const spotLightShadowsHelperFactory = (spotLight) => {
  const spotLightHelper = new THREE.CameraHelper(spotLight.shadow.camera);
  spotLightHelper.visible = SPOT_LIGHT_SHADOWS_HELPER_IS_VISIBLE_DEFAULT;

  return spotLightHelper;
};
