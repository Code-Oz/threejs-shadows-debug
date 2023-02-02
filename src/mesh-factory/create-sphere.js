import * as THREE from "three";
import { IS_SPHERE_CAST_SHADOWS } from "../config";

export const createSphere = (radius, position, material) => {
  const sphere = new THREE.Mesh(
    new THREE.SphereBufferGeometry(radius, 32, 32),
    material
  );
  sphere.position.set(position.x, position.y, position.z);
  sphere.castShadow = IS_SPHERE_CAST_SHADOWS;
  return sphere;
};
