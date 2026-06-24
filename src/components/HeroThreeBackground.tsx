"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 20;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Colors mapping
    const colorGreen = new THREE.Color("#0d6e55");
    const colorWhite = new THREE.Color("#ffffff");
    const colorAmber = new THREE.Color("#f59e0b");

    // 1. Particles Setup
    const particleCount = 1900;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities: number[] = [];

    for (let i = 0; i < particleCount; i++) {
      // Position
      positions[i * 3] = (Math.random() - 0.5) * 60; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60; // z

      // Velocity
      velocities.push(0.02 + Math.random() * 0.04); // upward drift speed

      // Color distribution: 60% green, 25% white, 15% amber
      const rand = Math.random();
      let selectedColor = colorGreen;
      if (rand > 0.6 && rand <= 0.85) {
        selectedColor = colorWhite;
      } else if (rand > 0.85) {
        selectedColor = colorAmber;
      }

      colors[i * 3] = selectedColor.r;
      colors[i * 3 + 1] = selectedColor.g;
      colors[i * 3 + 2] = selectedColor.b;
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Particle texture (circle)
    const createParticleTexture = () => {
      const size = 16;
      const canvasTexture = document.createElement("canvas");
      canvasTexture.width = size;
      canvasTexture.height = size;
      const ctx = canvasTexture.getContext("2d");
      if (ctx) {
        const gradient = ctx.createRadialGradient(
          size / 2,
          size / 2,
          0,
          size / 2,
          size / 2,
          size / 2
        );
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.5)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, size, size);
      }
      return new THREE.CanvasTexture(canvasTexture);
    };

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      map: createParticleTexture(),
    });

    const particlePoints = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particlePoints);

    // 2. Torus Rings Setup
    const torusGroup = new THREE.Group();
    const torusGeometries: THREE.TorusGeometry[] = [];
    const torusMaterials: THREE.MeshBasicMaterial[] = [];

    const toruses = [
      { radius: 8, tube: 0.06, color: "#15a37e", rx: 0.5, ry: 0.2, speed: 0.005 },
      { radius: 11, tube: 0.08, color: "#0d6e55", rx: -0.3, ry: 0.6, speed: -0.003 },
      { radius: 14, tube: 0.05, color: "#15a37e", rx: 0.8, ry: -0.4, speed: 0.004 },
    ];

    toruses.forEach((t) => {
      const geom = new THREE.TorusGeometry(t.radius, t.tube, 8, 64);
      const mat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(t.color),
        transparent: true,
        opacity: 0.18,
        wireframe: true,
      });
      const mesh = new THREE.Mesh(geom, mat);
      mesh.rotation.x = t.rx;
      mesh.rotation.y = t.ry;
      
      torusGeometries.push(geom);
      torusMaterials.push(mat);
      torusGroup.add(mesh);
    });

    scene.add(torusGroup);

    // 3. Icosahedra Wireframes Setup
    const icosahedronGroup = new THREE.Group();
    const icoGeometries: THREE.IcosahedronGeometry[] = [];
    const icoMaterials: THREE.MeshBasicMaterial[] = [];

    const icosahedras = [
      { radius: 16, color: "#15a37e", opacity: 0.08, rx: 0.1, ry: 0.15, rz: 0.05 },
      { radius: 22, color: "#ffffff", opacity: 0.06, rx: -0.2, ry: -0.1, rz: 0.2 },
    ];

    icosahedras.forEach((ico) => {
      const geom = new THREE.IcosahedronGeometry(ico.radius, 1);
      const mat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(ico.color),
        transparent: true,
        opacity: ico.opacity,
        wireframe: true,
      });
      const mesh = new THREE.Mesh(geom, mat);
      mesh.rotation.x = ico.rx;
      mesh.rotation.y = ico.ry;
      mesh.rotation.z = ico.rz;

      icoGeometries.push(geom);
      icoMaterials.push(mat);
      icosahedronGroup.add(mesh);
    });

    scene.add(icosahedronGroup);

    // Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
    scene.add(ambientLight);

    // Parallax values
    let mouseX = 0;
    let mouseY = 0;
    let targetCameraX = 0;
    let targetCameraY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) - 0.5;
      mouseY = (event.clientY / window.innerHeight) - 0.5;
    };

    window.addEventListener("mousemove", handleMouseMove);

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

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      // 1. Animate Particles
      const positionsAttr = particleGeometry.attributes.position as THREE.BufferAttribute;
      const array = positionsAttr.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        // Move y up
        array[i * 3 + 1] += velocities[i];

        // Wrap particles
        if (array[i * 3 + 1] > 30) {
          array[i * 3 + 1] = -30;
          array[i * 3] = (Math.random() - 0.5) * 60;
          array[i * 3 + 2] = (Math.random() - 0.5) * 60;
        }
      }
      positionsAttr.needsUpdate = true;

      // 2. Rotate Torus Rings
      torusGroup.children.forEach((mesh, index) => {
        const speed = toruses[index].speed;
        mesh.rotation.x += speed * 0.5;
        mesh.rotation.y += speed;
      });

      // 3. Rotate Icosahedras
      icosahedronGroup.children.forEach((mesh, index) => {
        const factor = index === 0 ? 0.001 : -0.0008;
        mesh.rotation.x += factor;
        mesh.rotation.y += factor * 1.5;
        mesh.rotation.z += factor * 0.5;
      });

      // 4. Parallax Lerp
      targetCameraX = mouseX * 3.5;
      targetCameraY = -mouseY * 3.5;

      camera.position.x += (targetCameraX - camera.position.x) * 0.025;
      camera.position.y += (targetCameraY - camera.position.y) * 0.025;
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
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();

      // Dispose Geometries
      particleGeometry.dispose();
      torusGeometries.forEach((g) => g.dispose());
      icoGeometries.forEach((g) => g.dispose());

      // Dispose Materials
      particleMaterial.dispose();
      torusMaterials.forEach((m) => m.dispose());
      icoMaterials.forEach((m) => m.dispose());

      // Dispose Textures
      particleMaterial.map?.dispose();

      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
