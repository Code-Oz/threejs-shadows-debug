import * as THREE from "three";
import { IS_PLANE_RECEIVE_SHADOWS } from "../config";

export const createPlane = (width, height, position, material) => {
  const plane = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(width, height),
    material
  );
  plane.position.set(position.x, position.y, position.z);
  // FORCE TO BE A FLOOR
  plane.rotation.x = -Math.PI * 0.5;
  plane.receiveShadow = IS_PLANE_RECEIVE_SHADOWS;
  return plane;
};
