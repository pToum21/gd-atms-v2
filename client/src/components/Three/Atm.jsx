import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

export function ATM(props) {
  const { nodes, materials } = useGLTF('/3dModels/security_breach_atm.glb');
  return (
    <group {...props} dispose={null}>    
      <group position={[2, 0, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.Object_7.geometry} material={materials.MI_ATMDisplay} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.MI_ATMCase_Roxy} />
      </group>
      <group position={[-2, 0, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.Object_10.geometry} material={materials.MI_ATMDisplay} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.MI_ATMCase_Chica} />
      </group>
      
      <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.Object_16.geometry} material={materials.MI_ATMDisplay} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.MI_ATMCase_Black} />
      </group>
    </group>
  );
}

useGLTF.preload('/3dModels/security_breach_atm.glb');
