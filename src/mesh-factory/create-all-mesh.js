import {
  BOX_SIZE,
  BOX_POSITION_X_DEFAULT,
  BOX_POSITION_Y_DEFAULT,
  BOX_POSITION_Z_DEFAULT,
  defaultMaterial,
  SPHERE_RADIUS,
  SPHERE_POSITION_X_DEFAULT,
  SPHERE_POSITION_Y_DEFAULT,
  SPHERE_POSITION_Z_DEFAULT,
  TORUS_RADIUS,
  TORUS_POSITION_X_DEFAULT,
  TORUS_POSITION_Y_DEFAULT,
  TORUS_POSITION_Z_DEFAULT,
  FLOOR_WIDTH,
  FLOOR_HEIGHT,
  FLOOR_POSITION_X_DEFAULT,
  FLOOR_POSITION_Y_DEFAULT,
  FLOOR_POSITION_Z_DEFAULT,
} from "../config";
import { createCube } from "./create-cube";
import { createPlane } from "./create-plane";
import { createTorus } from "./create-torus";
import { createSphere } from "./create-sphere";

export const createAllMesh = () => {
  const cube = createCube(
    BOX_SIZE,
    {
      x: BOX_POSITION_X_DEFAULT,
      y: BOX_POSITION_Y_DEFAULT,
      z: BOX_POSITION_Z_DEFAULT,
    },
    defaultMaterial
  );

  const floor = createPlane(
    FLOOR_WIDTH,
    FLOOR_HEIGHT,
    {
      x: FLOOR_POSITION_X_DEFAULT,
      y: FLOOR_POSITION_Y_DEFAULT,
      z: FLOOR_POSITION_Z_DEFAULT,
    },
    defaultMaterial
  );

  const torus = createTorus(
    TORUS_RADIUS,
    {
      x: TORUS_POSITION_X_DEFAULT,
      y: TORUS_POSITION_Y_DEFAULT,
      z: TORUS_POSITION_Z_DEFAULT,
    },
    defaultMaterial
  );

  const sphere = createSphere(
    SPHERE_RADIUS,
    {
      x: SPHERE_POSITION_X_DEFAULT,
      y: SPHERE_POSITION_Y_DEFAULT,
      z: SPHERE_POSITION_Z_DEFAULT,
    },
    defaultMaterial
  );

  return [cube, floor, torus, sphere];
};
