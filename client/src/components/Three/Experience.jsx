import React from 'react';
import { useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { ATM } from './Atm';
import * as THREE from 'three';

const Experience = () => {
    const { scene, camera } = useThree();
    scene.background = new THREE.Color('#f7f7f7');

    // Set up a fixed camera position
    camera.position.set(-1, 0, 2);

    return (
        <>
            {/* this turns off user controls*/}
            <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
            <ambientLight intensity={10} />
            <ATM />
        </>
    );
};

export default Experience;
