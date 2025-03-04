import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";

// 🎮 Player (Basket)
function Player({ position }) {
  const playerRef = useRef();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft" && playerRef.current.position.x > -1.5) {
        gsap.to(playerRef.current.position, { x: playerRef.current.position.x - 0.6, duration: 0.2, ease: "power2.out" });
      }
      if (e.key === "ArrowRight" && playerRef.current.position.x < 1.5) {
        gsap.to(playerRef.current.position, { x: playerRef.current.position.x + 0.6, duration: 0.2, ease: "power2.out" });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <mesh ref={playerRef} position={position}>
      <torusGeometry args={[0.5, 0.15, 16, 100]} />
      <meshStandardMaterial color="cyan" emissive="cyan" emissiveIntensity={1} />
    </mesh>
  );
}

// 🚀 Falling Technologies (Glowing Cubes)
function FallingTech({ position, onCatch }) {
  const techRef = useRef();

  useFrame(() => {
    if (techRef.current) {
      techRef.current.position.y -= 0.04;

      // If caught
      if (techRef.current.position.y < -1.3) {
        onCatch(techRef.current.position.x);
        techRef.current.position.set(Math.random() * 3 - 1.5, 3, 0);
      }
    }
  });

  return (
    <mesh ref={techRef} position={position} rotation={[0.5, 0.5, 0]}>
      <boxGeometry args={[0.4, 0.4, 0.4]} />
      <meshStandardMaterial color="gold" emissive="gold" emissiveIntensity={1.2} />
    </mesh>
  );
}

// 🌌 **Grid Floor**
function GridFloor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
      <planeGeometry args={[5, 6, 20, 20]} />
      <meshBasicMaterial color="blue" wireframe opacity={0.6} transparent />
    </mesh>
  );
}

// 🏆 **Score & Game Logic**
function Game() {
  const [score, setScore] = useState(0);

  const handleCatch = (techX) => {
    setScore((prev) => prev + 10);
  };

  return (
    <>
      <Canvas camera={{ position: [0, 2, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Stars radius={50} depth={50} count={5000} factor={6} fade speed={1} />
        <GridFloor />
        <Player position={[0, -1, 0]} />
        <FallingTech position={[1, 2, 0]} onCatch={handleCatch} />
        <FallingTech position={[-1, 3, 0]} onCatch={handleCatch} />
        <FallingTech position={[0, 4, 0]} onCatch={handleCatch} />
      </Canvas>

      {/* Score UI */}
      <div style={{
        position: "absolute",
        top: 20,
        left: 20,
        color: "white",
        fontSize: "24px",
        fontWeight: "bold",
        textShadow: "2px 2px 4px rgba(0,0,255,0.8)"
      }}>
        Score: {score}
      </div>
    </>
  );
}

export default Game;
