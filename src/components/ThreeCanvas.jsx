import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

export const ThreeCanvas = () => {
  const containerRef = useRef(null);
  const { theme } = useTheme();
  const sceneRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let mouseX = 0, mouseY = 0;
    let targetMouseX = 0, targetMouseY = 0;
    let scrollY = 0, targetScrollY = 0;
    const clock = new THREE.Clock();

    // Init Scene
    const scene = new THREE.Scene();
    const isInitialLight = (theme === 'light');
    scene.fog = new THREE.FogExp2(isInitialLight ? 0xF3F4F6 : 0x0F1115, 0.015);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
      precision: "highp"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, isInitialLight ? 1.2 : 0.7);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xffffff, 2, 60);
    pointLight1.position.set(10, 15, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xb0b8c4, 1.5, 60);
    pointLight2.position.set(-10, -10, 5);
    scene.add(pointLight2);

    const pointLightDynamic = new THREE.PointLight(0xffffff, 2.5, 45);
    scene.add(pointLightDynamic);

    // Particles
    const particleCount = 500;
    const pGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 60;
      positions[i + 1] = (Math.random() - 0.5) * 60;
      positions[i + 2] = (Math.random() - 0.5) * 60;
      scales[i / 3] = Math.random() * 2 + 0.5;
    }

    pGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    pGeometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    const particleMat = new THREE.PointsMaterial({
      color: isInitialLight ? 0x4B5563 : 0xE5E7EB,
      size: 0.1,
      transparent: true,
      opacity: isInitialLight ? 0.65 : 0.45,
      blending: isInitialLight ? THREE.NormalBlending : THREE.AdditiveBlending
    });

    const particles = new THREE.Points(pGeometry, particleMat);
    scene.add(particles);

    // Floating Glass Objects
    const floatingGroup = new THREE.Group();

    const glassMat = new THREE.MeshPhysicalMaterial({
      color: isInitialLight ? 0xE2E8F0 : 0x161A20,
      metalness: 0.1,
      roughness: 0.1,
      transmission: 0.9,
      thickness: 1.2,
      transparent: true,
      opacity: isInitialLight ? 0.85 : 0.7,
      ior: 1.5
    });

    const wireMat = new THREE.MeshBasicMaterial({
      color: isInitialLight ? 0x1F2937 : 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: isInitialLight ? 0.25 : 0.12
    });

    const icoGeo = new THREE.IcosahedronGeometry(3.5, 1);
    const heroIco = new THREE.Mesh(icoGeo, glassMat);
    const icoWire = new THREE.Mesh(icoGeo, wireMat);
    heroIco.add(icoWire);
    heroIco.position.set(0, 0, -2);
    floatingGroup.add(heroIco);

    const cubes = [];
    const cubeGeo = new THREE.BoxGeometry(1.2, 1.2, 1.2);

    for (let i = 0; i < 8; i++) {
      const cube = new THREE.Mesh(cubeGeo, glassMat);
      const cubeWire = new THREE.Mesh(cubeGeo, wireMat);
      cube.add(cubeWire);

      const angle = (i / 8) * Math.PI * 2;
      const radius = 9 + Math.random() * 3;
      cube.position.x = Math.cos(angle) * radius;
      cube.position.y = (Math.random() - 0.5) * 8;
      cube.position.z = Math.sin(angle) * radius - 5;

      cube.userData = { rotSpeed: Math.random() * 0.008 + 0.004 };
      cubes.push(cube);
      floatingGroup.add(cube);
    }
    scene.add(floatingGroup);

    // Global Network Sphere
    const globeGroup = new THREE.Group();
    globeGroup.position.set(0, -45, -10);

    const sphereGeo = new THREE.SphereGeometry(6, 32, 32);
    const globeWireMat = new THREE.MeshBasicMaterial({
      color: isInitialLight ? 0x6B7280 : 0xB0B8C4,
      wireframe: true,
      transparent: true,
      opacity: isInitialLight ? 0.4 : 0.25
    });

    const globe = new THREE.Mesh(sphereGeo, globeWireMat);
    globeGroup.add(globe);

    const nodeCount = 30;
    const nodeGeo = new THREE.SphereGeometry(0.12, 8, 8);
    const globeNodeMat = new THREE.MeshBasicMaterial({ color: isInitialLight ? 0x111827 : 0xffffff });

    for (let i = 0; i < nodeCount; i++) {
      const node = new THREE.Mesh(nodeGeo, globeNodeMat);
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;

      node.position.x = 6.05 * Math.cos(theta) * Math.sin(phi);
      node.position.y = 6.05 * Math.sin(theta) * Math.sin(phi);
      node.position.z = 6.05 * Math.cos(phi);
      globeGroup.add(node);
    }
    scene.add(globeGroup);

    // Save refs for theme update
    sceneRef.current = {
      scene,
      particleMat,
      glassMat,
      wireMat,
      globeWireMat,
      globeNodeMat,
      ambientLight
    };

    // Listeners
    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      mouseX += (targetMouseX - mouseX) * 0.03;
      mouseY += (targetMouseY - mouseY) * 0.03;
      scrollY += (targetScrollY - scrollY) * 0.03;

      if (heroIco) {
        heroIco.rotation.x += 0.002;
        heroIco.rotation.y += 0.003;
      }

      if (particles) {
        particles.rotation.y += 0.0004;
      }

      cubes.forEach(cube => {
        cube.rotation.x += cube.userData.rotSpeed;
        cube.rotation.y += cube.userData.rotSpeed;
        cube.position.y += Math.sin(elapsedTime * 1.5 + cube.position.x) * 0.002;
      });

      if (globeGroup) {
        globeGroup.rotation.y += 0.003;
      }

      const scrollFactor = scrollY * 0.008;
      camera.position.x = mouseX * 1.8;
      camera.position.y = -scrollFactor * 0.5 + (mouseY * 1.2);
      camera.position.z = 18 - scrollFactor * 0.1;
      camera.lookAt(0, -scrollFactor * 0.5, 0);

      pointLightDynamic.position.set(mouseX * 8, mouseY * 8 - scrollFactor * 0.5, 10);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Sync theme changes with Three.js materials
  useEffect(() => {
    if (!sceneRef.current) return;
    const { scene, particleMat, glassMat, wireMat, globeWireMat, globeNodeMat, ambientLight } = sceneRef.current;
    const isLight = (theme === 'light');

    if (scene.fog) {
      scene.fog.color.setHex(isLight ? 0xF3F4F6 : 0x0F1115);
    }
    if (particleMat) {
      particleMat.color.setHex(isLight ? 0x4B5563 : 0xE5E7EB);
      particleMat.opacity = isLight ? 0.65 : 0.45;
      particleMat.blending = isLight ? THREE.NormalBlending : THREE.AdditiveBlending;
    }
    if (glassMat) {
      glassMat.color.setHex(isLight ? 0xE2E8F0 : 0x161A20);
      glassMat.opacity = isLight ? 0.85 : 0.7;
    }
    if (wireMat) {
      wireMat.color.setHex(isLight ? 0x1F2937 : 0xffffff);
      wireMat.opacity = isLight ? 0.25 : 0.12;
    }
    if (globeWireMat) {
      globeWireMat.color.setHex(isLight ? 0x6B7280 : 0xB0B8C4);
      globeWireMat.opacity = isLight ? 0.4 : 0.25;
    }
    if (globeNodeMat) {
      globeNodeMat.color.setHex(isLight ? 0x111827 : 0xffffff);
    }
    if (ambientLight) {
      ambientLight.intensity = isLight ? 1.2 : 0.7;
    }
  }, [theme]);

  return <div id="webgl-canvas-container" ref={containerRef} />;
};
