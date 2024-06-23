import Image from "next/image";
import { SaveFlowDialog } from "./SaveFlowDialog";

export const Navbar = () => {
  return (
    <div className="w-full p-4 flex flex-row items-center justify-between border-b border">
      <div className="flex flex-row items-center">
        <Image
          src="https://bookface-images.s3.amazonaws.com/logos/c377aa470ac2779de3b71970de4ef16494d54de9.png"
          height={48}
          width={96}
          alt="Onetext Logo"
        />
        <h1 className="font-bold text-[1.5rem]">Flow Builder</h1>
      </div>
      <SaveFlowDialog />
    </div>
  );
};
