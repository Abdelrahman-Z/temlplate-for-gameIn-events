"use client";
import React, { useState, useEffect } from "react";
// @ts-check
import "@google/model-viewer";

const ModelViewer: React.FC = () => {
  const [, setIsIos] = useState(false); // State to determine the platform
  const [modelPath, setModelPath] = useState({
    glb: "/assets/Microscope.glb",
    usdz: "/assets/microscope.usdz",
  });

  const models = [
    {
      name: "Microscope",
      glb: "/assets/Microscope.glb",
      usdz: "/assets/microscope.usdz",
    },
    {
      name: "Cannula",
      glb: "/assets/cannula.glb",
      usdz: "/assets/cannula.usdz",
    },
    {
      name: "Diabetes Pen",
      glb: "/assets/monjarou.glb",
      usdz: "/assets/monjarou.usdz",
    },
    {
      name: "Syringe",
      glb: "/assets/Sringe.glb",
      usdz: "/assets/syringe.usdz",
    },
  ];

  // Detect if the user is on iOS
  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    setIsIos(/iPhone|iPad|iPod/i.test(userAgent));
  }, []);

  return (
    <div className="flex flex-col items-center h-screen bg-gray-100 text-black">
      <header className="text-center mt-5">
        <img
          src="/assets/game in logo.svg"
          alt="Game In Logo"
          className="w-36 mb-3"
        />
        <h1 className="text-xl text-gray-600">3D Model Viewer</h1>
      </header>

      <div className="flex flex-col max-w-3xl h-screen mt-8 rounded-lg overflow-hidden bg-white shadow-md">
        {/* 3D Model Viewer */}
        {React.createElement("model-viewer", {
          src: modelPath.glb,
          "ios-src":  modelPath.usdz,
          alt: "3D model",
          "shadow-intensity": "1",
          "camera-controls": true,
          "auto-rotate": true,
          ar: true,
          autoplay: true,
          style: { width: "100%", height: "1200px" },
        })}

        {/* Buttons to Switch Models */}
        <div className="flex flex-wrap gap-4 justify-center p-4 bg-gray-100">
          {models.map((model) => (
            <button
              key={model.name}
              className="bg-black text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-gray-700"
              onClick={() => setModelPath({ glb: model.glb, usdz: model.usdz })}
            >
              {model.name}
            </button>
          ))}
        </div>
      </div>

      <footer className="mt-4 text-gray-600">
        <p>Game In Model Viewer</p>
      </footer>
    </div>
  );
};

export default ModelViewer;
