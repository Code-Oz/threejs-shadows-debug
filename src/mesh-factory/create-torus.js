import * as THREE from "three";
import { IS_TORUS_CAST_SHADOWS } from "../config";

export const createTorus = (radius, position, material) => {
  const torus = new THREE.Mesh(
    new THREE.TorusBufferGeometry(radius, 0.2, 32, 64),
    material
  );
  torus.position.set(position.x, position.y, position.z);
  torus.castShadow = IS_TORUS_CAST_SHADOWS;
  return torus;
};
