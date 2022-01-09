import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from 'tailwind-styled-components'

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Earth  from "../components/earth";



export default function Home() {
  return (
    <CanvasContainer>
        <Canvas>
            <Suspense fallback={null}>
              <Earth />
            </Suspense>
        </Canvas>
    </CanvasContainer>
  )
}

const CanvasContainer = tw.div`h-screen w-screen bg-blue-800`
