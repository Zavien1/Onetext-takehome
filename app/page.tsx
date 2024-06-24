"use client";

import { Navbar } from "@/components/Navbar";
import { DropContainer } from "../components/DropContainer";
import { useState } from "react";

export default function Home() {
  const [activeNodes, setActiveNodes] = useState([]);
  return (
    <main className="flex min-h-screen w-full flex-col">
      <Navbar nodes={activeNodes} />
      <DropContainer setActiveNodes={setActiveNodes} />
    </main>
  );
}
