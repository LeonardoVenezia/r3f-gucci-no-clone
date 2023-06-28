import React, { useRef } from 'react';
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import Image from '../Image';

const coll = [
  {
    url: "/collection/BEHIND THE WATERFALL.webp",
    position: new THREE.Vector3(1.3, 1.5, 0)
  },
  {
    url: "/collection/Chromatic Gucci (Colour Alternative 2).webp",
    position: new THREE.Vector3(1.5, .4, -1)
  },
  {
    url: "/collection/Cinders.webp",
    position: new THREE.Vector3(-1.3, -.3, -2)
  },
  {
    url: "/collection/CURRENTS.webp",
    position: new THREE.Vector3(-.9, -1.5, -3)
  },
  {
    url: "/collection/EARLY JUNE.webp",
    position: new THREE.Vector3(-1.5, 1.4, -4)
  },
  {
    url: "/collection/Flora I.webp",
    position: new THREE.Vector3(1.5, -1.3, -5)
  },
  {
    url: "/collection/GG Quartet.webp",
    position: new THREE.Vector3(.3, .2, -6)
  },
  {
    url: "/collection/Gucci Futuristic Flora.webp",
    position: new THREE.Vector3(.5, .5, 1)
  },
  {
    url: "/collection/Gucci_cry_baby.webp",
    position: new THREE.Vector3(-2, -1.5, 2)
  },
  {
    url: "/collection/Moonlight Romance.webp",
    position: new THREE.Vector3(0, -1, 3)
  },
  {
    url: "/collection/Portal.webp",
    position: new THREE.Vector3(-.5, 1, 4)
  },
  {
    url: "/collection/Take Time to Smell The Flowers.webp",
    position: new THREE.Vector3(1.5, 0, 5)
  },
  {
    url: "/collection/The Eyes of the Tiger.webp",
    position: new THREE.Vector3(-1.5, -1, 5)
  },
  {
    url: "/collection/Skin-of-the-future.webp",
    position: new THREE.Vector3(.5, -.3, 6)
  },
  {
    url: "/collection/Quantum-GUCCI.webp",
    position: new THREE.Vector3(-1, .3, 7)
  },
  {
    url: "/collection/Welcome-to-your-rebirth.webp",
    position: new THREE.Vector3(-.1, -.1, 8)
  },
  {
    url: "/collection/Tropic of Capricorn.webp",
    position: new THREE.Vector3(.6, -.6, 9)
  },
  {
    url: "/collection/Tropic Of Cancer.webp",
    position: new THREE.Vector3(-.1, .3, 10)
  },
  {
    url: "/collection/THE RED HUNTER.webp",
    position: new THREE.Vector3(-.5, 1, 11)
  },
  {
    url: "/collection/The Eyes of the Tiger.webp",
    position: new THREE.Vector3(.5, -.3, 12)
  },

];

const coll2 = coll.map(c => {
  let newPosition = c.position.clone();
  newPosition.z -= coll.length
  return {
    ...c,
    position: newPosition,
  }
});

const collection = [...coll, ...coll2];

const Images = ({ position, selectPhoto }) => {
  const groupRef = useRef();
  const controlRef = useRef();

  useFrame(() => {
    const myObject = groupRef.current;
    myObject.position.z = position;
  });

  return (
    <group
      ref={groupRef}
    >
      {
        collection.map((c, index) => {
          return (
            <Image
              c={c}
              key={index}
              index={index}
              handleClick={()=> selectPhoto(c)}
            />
          );
        })
      }
      <OrbitControls enableZoom={false} enableRotate={false} ref={controlRef} />
    </group>
  );
}

export default Images;
