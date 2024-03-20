import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function ATM(props) {
  const { nodes, materials } = useGLTF('/3dModels/security_breach_atm.glb');
  const group = useRef();
  const [isRotating, setIsRotating] = useState(true); // State to control rotation

  // Rotate the ATM slowly
  useFrame(() => {
    if (isRotating) {
      group.current.rotation.y += 0.003;
    }
  });

  const toggleRotation = () => {
    setIsRotating(!isRotating);
  };

  return (
    <group ref={group} {...props} dispose={null} name="ATMGroup" onClick={toggleRotation}>
      <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.Object_16.geometry} material={materials.MI_ATMDisplay} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.MI_ATMCase_Black} />
      </group>
    </group>
  );
}

useGLTF.preload('/3dModels/security_breach_atm.glb');
