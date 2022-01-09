import React from 'react'
import * as THREE from "three";

import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { useTexture } from '@react-three/drei'

import CloudsMap from './earth-assets/8k_earth_clouds.jpg'
import ColorMap from './earth-assets/8k_earth_normal_map.jpg'

import SpecularMap from './earth-assets/8k_earth_specular_map.jpg'
import NightMap from './earth-assets/8k_earth_nightmap.jpg'
import DayMap from './earth-assets/8k_earth_daymap.jpg'


const Earth = () => {


    const colorMap = useLoader(TextureLoader, 'ColorMap')

    return (
        <>
         <ambientLight intensity={0.2} />
        <directionalLight />
        <mesh>
            <sphereGeometry attach="geometry" args={[1.57, 32, 32]} />
            <meshStandardMaterial attach="material"  />
            <meshStandardMaterial map={colorMap}  />
        </mesh>
            
        </>
    )
}

export default Earth
