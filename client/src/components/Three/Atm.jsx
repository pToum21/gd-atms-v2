import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function ATM(props) {
  const { nodes, materials } = useGLTF('/3dModels/security_breach_atm.glb');
  const group = useRef();

  return (
    <group ref={group} {...props} dispose={null} name="ATMGroup">
      <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.Object_16.geometry} material={materials.MI_ATMDisplay} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.MI_ATMCase_Black} />
      </group>
    </group>
  );
}

useGLTF.preload('/3dModels/security_breach_atm.glb');
