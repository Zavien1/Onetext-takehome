import { Navbar } from "@/components/Navbar";
import { DropContainer } from "../components/DropContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <Navbar />
      <DropContainer />
    </main>
  );
}
