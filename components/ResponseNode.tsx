import cn from "@/utils/cn";
import { useCallback } from "react";
import { Handle, Position } from "reactflow";

const handleStyle = { left: 10 };

export const ResponseNode = ({ data, isSelected }: any) => {
  const onChange = useCallback((evt: any) => {
    console.log(evt.target.value);
  }, []);

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div
        className={cn(
          "rounded-lg bg-green-500 text-white p-4",
          isSelected ? "border-4 border-black" : "border-4 border-green-500"
        )}
      >
        <p>Response Node</p>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
      {/* <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        style={handleStyle}
      /> */}
    </>
  );
};
