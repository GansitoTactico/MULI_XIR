import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

// Pre-cargar el modelo fuera del componente
useGLTF.preload("/models/Mulix.glb");

export default function CursorFollowerModel() {
  const groupRef = useRef();
  const [model, setModel] = useState(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [targetPosition] = useState(new THREE.Vector3());

  // Asegura que el canvas no bloquee la interacción con otros elementos
  useEffect(() => {
    const canvas = document.querySelector("canvas");
    if (canvas) {
      canvas.style.pointerEvents = "none";
    }
    return () => {
      if (canvas) {
        canvas.style.pointerEvents = "";
      }
    };
  }, []);

  // Cargar modelo 3D con la ruta correcta
  const gltf = useGLTF("/models/Mulix.glb"); // Ruta a tu archivo 3D

  // Listener para actualizar el puntero
  useEffect(() => {
    const handleMouseMove = (event) => {
      // Normalizar coordenadas del mouse a rango [-1, 1]
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -((event.clientY / window.innerHeight) * 2 - 1);
      setPointer({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (gltf.scene) {
      // Clonar el modelo para evitar compartir estados
      const modelClone = gltf.scene.clone();
      setModel(modelClone);
    }
  }, [gltf]);

  // Actualizar posición cada frame
  useFrame(() => {
    if (!groupRef.current || !model) return;

    // Convertir coordenadas del puntero a 3D
    targetPosition.set(pointer.x * 5, pointer.y * 5, 0);

    // Suavizar movimiento (lerp)
    groupRef.current.position.lerp(targetPosition, 0.1);

    // Rotación continua opcional
    groupRef.current.rotation.y = +6.001;
  });

  if (!model) return null;

  return (
    <group ref={groupRef}>
      <primitive
        object={model}
        scale={[0.3, 0.5, 0.35]} // Ajustar escala según necesidad
      />
    </group>
  );
}
