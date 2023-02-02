import * as dat from "dat.gui";

export const createDebugGUI = () => {
  const gui = new dat.GUI();

  const folderMesh = gui.addFolder("Mesh");
  const folderMeshCommon = folderMesh.addFolder("Common");
  const folderMeshCube = folderMesh.addFolder("Main Cube");
  const folderMeshFloor = folderMesh.addFolder("Floor");
  const folderMeshTorus = folderMesh.addFolder("Torus");
  const folderMeshSphere = folderMesh.addFolder("Sphere");

  const folderLight = gui.addFolder("Lights");
  const folderDirectionnalLight = folderLight.addFolder("DirectionnalLight");
  const folderSpotLight = folderLight.addFolder("SpotLight");

  return {
    folderMesh,
    folderMeshCommon,
    folderMeshCube,
    folderMeshFloor,
    folderMeshTorus,
    folderMeshSphere,
    folderDirectionnalLight,
    folderSpotLight,
  };
};
