"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface SolarSystemCanvasProps {
  sunColor?: string;
}

export default function SolarSystemCanvas({ sunColor = "#f59e0b" }: SolarSystemCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sunMaterialRef = useRef<THREE.MeshBasicMaterial | null>(null);
  const sunLightRef = useRef<THREE.PointLight | null>(null);

  // Sync sun color when prop changes
  useEffect(() => {
    if (sunMaterialRef.current) {
      sunMaterialRef.current.color.set(sunColor);
    }
    if (sunLightRef.current) {
      sunLightRef.current.color.set(sunColor);
    }
  }, [sunColor]);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    // Dimensions
    let width = container.clientWidth;
    let height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 10, 22);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 1. Sun
    const sunGeom = new THREE.SphereGeometry(2.0, 32, 32);
    const sunMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(sunColor),
      toneMapped: false,
    });
    const sunMesh = new THREE.Mesh(sunGeom, sunMat);
    scene.add(sunMesh);
    sunMaterialRef.current = sunMat;

    // Light from Sun
    const sunLight = new THREE.PointLight(new THREE.Color(sunColor), 3, 50, 0.5);
    scene.add(sunLight);
    sunLightRef.current = sunLight;

    // Ambient support
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.08);
    scene.add(ambientLight);

    // 2. Planets Config
    const planetsData = [
      { radius: 0.35, color: "#15a37e", distance: 4.8, speed: 0.025, rotationSpeed: 0.015 }, // Greenish-teal
      { radius: 0.55, color: "#a1a1aa", distance: 7.5, speed: 0.018, rotationSpeed: 0.01 },  // Grey-silver
      { radius: 0.5, color: "#f59e0b", distance: 10.5, speed: 0.012, rotationSpeed: 0.02 },  // Amber-gold
      { radius: 0.75, color: "#0d1f3c", distance: 13.8, speed: 0.008, rotationSpeed: 0.005 }, // Deep Navy
    ];

    const planetsGroup = new THREE.Group();
    const planetMeshes: THREE.Mesh[] = [];
    const orbitGeometries: THREE.BufferGeometry[] = [];
    const orbitLines: THREE.LineLoop[] = [];

    planetsData.forEach((pd) => {
      // Orbit Line
      const orbitGeom = new THREE.BufferGeometry();
      const points: THREE.Vector3[] = [];
      const segments = 128;
      for (let j = 0; j <= segments; j++) {
        const theta = (j / segments) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(theta) * pd.distance, 0, Math.sin(theta) * pd.distance));
      }
      orbitGeom.setFromPoints(points);
      const orbitMat = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.08,
      });
      const orbitLine = new THREE.LineLoop(orbitGeom, orbitMat);
      scene.add(orbitLine);
      orbitGeometries.push(orbitGeom);
      orbitLines.push(orbitLine);

      // Planet Mesh
      const pGeom = new THREE.SphereGeometry(pd.radius, 32, 32);
      const pMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(pd.color),
        roughness: 0.8,
        metalness: 0.1,
      });
      const pMesh = new THREE.Mesh(pGeom, pMat);
      
      // Random starting angle
      const initialAngle = Math.random() * Math.PI * 2;
      pMesh.position.set(Math.cos(initialAngle) * pd.distance, 0, Math.sin(initialAngle) * pd.distance);
      // Store angle on userData
      pMesh.userData = { angle: initialAngle, distance: pd.distance, speed: pd.speed, rotSpeed: pd.rotationSpeed };

      planetsGroup.add(pMesh);
      planetMeshes.push(pMesh);
    });

    scene.add(planetsGroup);

    // 3. Star Field (ambient universe)
    const starCount = 350;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 80;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 80;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 80;
    }
    starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({
      size: 0.1,
      color: 0xffffff,
      transparent: true,
      opacity: 0.4,
    });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Visibility Check
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      time += 0.01;

      // Rotate Sun
      sunMesh.rotation.y += 0.003;

      // Animate Planets in orbit
      planetMeshes.forEach((mesh) => {
        const data = mesh.userData;
        data.angle += data.speed;
        mesh.position.x = Math.cos(data.angle) * data.distance;
        mesh.position.z = Math.sin(data.angle) * data.distance;
        mesh.rotation.y += data.rotSpeed;
      });

      // Camera drift (slow tilt up and down)
      camera.position.y = 8 + Math.sin(time * 0.4) * 2;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!containerRef.current) return;
      width = container.clientWidth;
      height = container.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();

      // Dispose Geometries
      sunGeom.dispose();
      starGeometry.dispose();
      orbitGeometries.forEach((g) => g.dispose());
      planetMeshes.forEach((mesh) => mesh.geometry.dispose());

      // Dispose Materials
      sunMat.dispose();
      starMaterial.dispose();
      planetMeshes.forEach((mesh) => {
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((m) => m.dispose());
        } else {
          mesh.material.dispose();
        }
      });

      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full min-h-[350px] md:min-h-[500px] z-0 overflow-hidden bg-slate-950 rounded-2xl border border-white/5 shadow-2xl">
      {/* Three.js Canvas */}
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Floating pulsing badge */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 select-none">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green-light opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green-light"></span>
        </span>
        <span className="text-[10px] font-mono font-bold tracking-wider text-slate-200 uppercase">
          VR Session Active
        </span>
      </div>
    </div>
  );
}
