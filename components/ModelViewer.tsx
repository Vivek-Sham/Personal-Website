"use client";

import dynamic from "next/dynamic";

const ModelViewer = dynamic(() => import("@/components/Model"), { ssr: false });

export default function Model() {
  return (
    <div>
      <ModelViewer />
    </div>
  );
}
