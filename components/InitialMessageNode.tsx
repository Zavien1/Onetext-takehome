import cn from "@/utils/cn";
import { useCallback } from "react";
import { Handle, Position } from "reactflow";

const handleStyle = { left: 10 };

export const InitialMessageNode = ({ data, isSelected }: any) => {
  const onChange = useCallback((evt: any) => {
    console.log(evt.target.value);
  }, []);

  return (
    <>
      <Handle type="source" position={Position.Bottom} />
      <div
        className={cn(
          "rounded-lg bg-blue-500 text-white p-4",
          isSelected ? "border-4 border-black" : "border-4 border-blue-500"
        )}
      >
        <p>Initial Message Node</p>
      </div>
      {/* <Handle type="source" position={Position.Bottom} id="a" /> */}
      {/* <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        style={handleStyle}
      /> */}
    </>
  );
};
