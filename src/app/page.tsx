"use client";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [health, setHealth] = useState<{ status: string; timestamp: string } | null>(null);

  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => setHealth(data));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Boilerplate Testing</h1>
      <section>
        <h2>Health Check</h2>
        <pre>{JSON.stringify(health, null, 2)}</pre>
      </section>
    </div>
  );
}
