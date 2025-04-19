"use client";

import dynamic from "next/dynamic";

const CrispChat = dynamic(() => import("./crisp-chat"), {
  ssr: false,
});

export default function CrispWrapper() {
  return <CrispChat />;
}
