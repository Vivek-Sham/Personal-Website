"use client";

import React, { useEffect, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh, Object3D } from "three";
import { OrbitControls } from "@react-three/drei";
import { useGLTF, useAnimations, Environment } from "@react-three/drei";
import { MeshStandardMaterial } from "three";

useGLTF.preload("/spheron.glb");

const Model: React.FC = () => {
  const mesh = useRef<Mesh>(null!);
  const { scene, animations } = useGLTF("/spheron.glb");
  const { actions } = useAnimations(animations, mesh);

  const color = "#efbf04";

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
    mesh.current.rotation.x += 0.02;
    mesh.current.rotation.z += 0.01;
  });

  useEffect(() => {
    // Play animations if they exist
    if (actions) {
      Object.values(actions).forEach((action) => {
        if (action) action.timeScale = 0.5;
      });
      Object.values(actions).forEach((action) => action?.play());
    }
  }, [actions]);

  useEffect(() => {
    scene.traverse((child: Object3D) => {
      if (
        child instanceof Mesh &&
        child.material &&
        "color" in child.material
      ) {
        const material = child.material as MeshStandardMaterial;
        material.color.set(color);
      }
    });
  }, [scene, color]);

  return (
    <mesh ref={mesh}>
      <primitive object={scene} />
    </mesh>
  );
};

const ModelViewer: React.FC = () => {
  return (
    <div className="">
      <Canvas
        style={{ height: "250px" }}
        camera={{ position: [3, 3, 3], fov: 30 }}
      >
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <Environment preset="studio" />
        <OrbitControls enableZoom={false} target={[0, 0, 0]} />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
