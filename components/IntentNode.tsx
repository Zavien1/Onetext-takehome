import cn from "@/utils/cn";
import { useCallback } from "react";
import { Handle, Position } from "reactflow";

const handleStyle = { left: 10 };

export const IntentNode = ({ data, isSelected }: any) => {
  const onChange = useCallback((evt: any) => {
    console.log(evt.target.value);
  }, []);

  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        style={{ top: "-5%", left: "50%", transform: "translate(-50%, 0)" }}
        className="z-50"
      />
      <div
        className={cn(
          "w-32 h-32 bg-orange-500 text-white flex items-center justify-center transform rotate-45 mt-5 mb-5",
          isSelected ? "border-4 border-black" : "border-4 border-orange-500"
        )}
      >
        <p className="transform -rotate-45 text-sm font-semibold">
          Intent Node
        </p>{" "}
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={{ bottom: "-5%", left: "50%", transform: "translate(-50%, 0)" }}
      />
    </>
  );
};
