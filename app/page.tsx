"use client";

import dynamic from "next/dynamic";

const ModelViewer = dynamic(() => import("../components/ModelViewer"), {
  ssr: false, // Disable server-side rendering
});

export default function Home() {
  return <ModelViewer />;
}
