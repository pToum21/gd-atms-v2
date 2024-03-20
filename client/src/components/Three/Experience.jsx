import { OrbitControls, useGLTF } from "@react-three/drei";
import { useThree } from '@react-three/fiber';
import { useState } from 'react';
import { ATM } from "./Atm";
import * as THREE from 'three';


const Experience = () => {
    const { size, scene } = useThree();
    scene.background = new THREE.Color('#f7f7f7');
    const [showLetters, setShowLetters] = useState(true);

    return (
        <>
            <OrbitControls />
            <ambientLight intensity={10} />
            <ATM />
        </>
    );
};

export default Experience;
