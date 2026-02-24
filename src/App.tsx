import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const RotatingCube = () => {
  const meshRef = useRef<THREE.Mesh>(null);
useFrame(() => {
  if (meshRef.current) {
    meshRef.current.rotation.y += 0.01;
    meshRef.current.rotation.x += 0.01;
  }
});


  return (
    <mesh ref={meshRef} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
      <cylinderGeometry args={[1, 1, 1, 32]} />
      <meshStandardMaterial color="#468585"  emissive="#468585" emissiveIntensity={0.5} />
    </mesh>
  );
}
const App = () => {
  return (
    <Canvas
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <OrbitControls enableZoom enablePan enableRotate />
      <directionalLight  position={[1, 1, 1]} intensity={10} color={0x9cdba6} />
      <color attach="background" args={["#F0F0F0"]} />

      <RotatingCube />
    </Canvas>
  );
};

export default App;
