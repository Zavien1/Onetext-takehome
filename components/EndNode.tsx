import { useCallback } from "react";
import { Handle, Position } from "reactflow";

const handleStyle = { left: 10 };

export const EndNode = ({ data }: any) => {
  const onChange = useCallback((evt: any) => {
    console.log(evt.target.value);
  }, []);

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div className="rounded-full bg-red-500 text-white p-8">
        <p className="">End</p>
      </div>
    </>
  );
};
