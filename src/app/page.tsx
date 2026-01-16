"use client";
import React, { useEffect, useState } from "react";
import { ThreeDCardDemo } from "@/components/Card";

export default function Home() {
  const [health, setHealth] = useState<{ status: string; timestamp: string } | null>(null);

  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => setHealth(data.data)); // Adjusted to access .data property if ApiResponse wraps it
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white text-white gap-8 p-4">
      <h1 className="text-4xl font-bold text-black">Boilerplate Testing</h1>
      <ThreeDCardDemo 
        status={health?.status || "LOADING"} 
        timestamp={health?.timestamp || ""} 
      />
    </div>
  );
}
