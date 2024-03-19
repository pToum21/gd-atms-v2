import { OrbitControls, useGLTF } from "@react-three/drei";
import { useThree } from '@react-three/fiber';
import { useState } from 'react';
import { ATM } from "./Atm";
import * as THREE from 'three';


const Experience = () => {
    const { size, scene } = useThree();
    scene.background = new THREE.Color('#FFFFFF');
    const [showLetters, setShowLetters] = useState(true);

    return (
        <>
            <OrbitControls />
            <ambientLight intensity={0.5} />
            <ATM />
        </>
    );
};

export default Experience;
