import * as THREE from "three";
import { IS_CUBE_CAST_SHADOWS } from "../config";

export const createCube = (size, position, material) => {
  const cube = new THREE.Mesh(
    new THREE.BoxBufferGeometry(size, size, size),
    material
  );
  cube.position.set(position.x, position.y, position.z);
  cube.castShadow = IS_CUBE_CAST_SHADOWS;
  return cube;
};
