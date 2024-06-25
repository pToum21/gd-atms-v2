import React from 'react';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience';

const Three = () => {
    return (
        <div style={{ height: '50vh' }}>
            <Canvas
                style={{ width: '100%', height: '100%' }}
                shadows
                gl={{ alpha: false }}
                camera={{ position: [0, 0, 10], fov: 60 }}
            >
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <Experience />
            </Canvas>
        </div>
    );
};

export default Three;
