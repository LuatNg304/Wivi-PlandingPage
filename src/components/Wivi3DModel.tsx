import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

interface Wivi3DModelProps {
  modelPath?: string;
  className?: string;
  /**
   * Điều chỉnh vị trí theo trục Y (cao / thấp).
   * Giá trị âm (ví dụ: -0.3, -0.6) sẽ dời mô hình xuống thấp hơn.
   * Giá trị dương (ví dụ: 0.3) sẽ dời mô hình lên cao hơn.
   * Mặc định là 0 (ngay chính giữa khung).
   */
  positionY?: number;
  /**
   * Điều chỉnh vị trí theo trục X (trái / phải). Mặc định là 0.
   */
  positionX?: number;
  /**
   * Tỉ lệ kích thước mô hình (mặc định: 2.2). Tăng lên nếu muốn to hơn.
   */
  scale?: number;
}

export const Wivi3DModel: React.FC<Wivi3DModelProps> = ({
  modelPath = "/modal3d/8899c880e7456aaaaba35722f50805e0.glb",
  className = "",
  positionY = -0.6,
  positionX = 0,
  scale = 2.2,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 360;
    let height = container.clientHeight || 420;

    // Scene setup
    const scene = new THREE.Scene();

    // Group wrapper to keep centering and positioning independent
    const wrapperGroup = new THREE.Group();
    wrapperGroup.position.set(positionX, positionY, 0);
    scene.add(wrapperGroup);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 4.5);

    // Renderer setup with alpha transparency
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.autoRotate = false; // Tắt tự động xoay vòng

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.6);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.2);
    dirLight1.position.set(6, 8, 6);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x38bdf8, 2.0);
    dirLight2.position.set(-6, -2, -4);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0x60a5fa, 2.5, 12);
    pointLight.position.set(0, 2, 3);
    scene.add(pointLight);

    // Load Model
    const loader = new GLTFLoader();
    let isLoaded = false;
    let reqId = 0;

    loader.load(
      modelPath,
      (gltf) => {
        const model = gltf.scene;

        // Auto center the geometry inside wrapperGroup
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        // Shift model so its center is at (0, 0, 0)
        model.position.sub(center);

        // Apply scale
        const maxDim = Math.max(size.x, size.y, size.z);
        const targetScale = scale / (maxDim || 1);
        model.scale.setScalar(targetScale);

        wrapperGroup.add(model);
        isLoaded = true;
        setLoading(false);
      },
      (xhr) => {
        if (xhr.total > 0) {
          const percent = Math.round((xhr.loaded / xhr.total) * 100);
          setProgress(percent);
        }
      },
      (err) => {
        console.error("Error loading 3D model:", err);
        setLoadError("Không thể tải mô hình 3D");
        setLoading(false);
      },
    );

    // Subtle mouse tilt effect
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };
    container.addEventListener("mousemove", handleMouseMove);

    // Animation Loop using performance.now()
    const startTime = performance.now();
    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      if (isLoaded) {
        // Floating motion centered around positionY
        wrapperGroup.position.y =
          positionY + Math.sin(elapsedTime * 1.4) * 0.06;
      }

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Resize observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newW, height: newH } = entry.contentRect;
        if (newW > 0 && newH > 0) {
          camera.aspect = newW / newH;
          camera.updateProjectionMatrix();
          renderer.setSize(newW, newH);
        }
      }
    });
    resizeObserver.observe(container);

    // Cleanup
    return () => {
      cancelAnimationFrame(reqId);
      container.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();
      controls.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [modelPath, positionY, positionX, scale]);

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-full min-h-[380px] sm:min-h-[440px] flex items-center justify-center cursor-grab active:cursor-grabbing ${className}`}
    >
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 pointer-events-none">
          <div className="size-10 rounded-full border-2 border-white/20 border-t-cyan-400 animate-spin" />
          <span className="text-xs text-cyan-200/90 font-medium">
            Đang tải mô hình 3D... {progress > 0 ? `${progress}%` : ""}
          </span>
        </div>
      )}

      {loadError && (
        <div className="text-xs text-rose-300 bg-rose-500/10 px-3 py-1.5 rounded-lg border border-rose-500/20">
          {loadError}
        </div>
      )}
    </div>
  );
};
