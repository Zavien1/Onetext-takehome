import React from "react";
import { Button } from "./ui/button";

type SidebarProps = {
  serializeFlow: () => void;
};

export const Sidebar = ({ serializeFlow }: SidebarProps) => {
  const onDragStart = (event: any, nodeType: any) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside className="relative flex-grow">
      <div className="description">
        You can drag these nodes to the pane on the right.
      </div>
      <div
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, "messageNode")}
        draggable
      >
        Message Node
      </div>
      <div
        className="dndnode responseNode"
        onDragStart={(event) => onDragStart(event, "responseNode")}
        draggable
      >
        Response Node
      </div>
      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, "intentNode")}
        draggable
      >
        Intent Node
      </div>
      <div
        className="dndnode actionNode"
        onDragStart={(event) => onDragStart(event, "actionNode")}
        draggable
      >
        Action Node
      </div>
      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, "endNode")}
        draggable
      >
        End Node
      </div>
      <div className="absolute top-[93%] w-full left-0 flex items-center justify-center">
        <Button
          className="p-2 bg-black text-white rounded-lg w-3/4"
          onClick={serializeFlow}
        >
          Export Data
        </Button>
      </div>
    </aside>
  );
};
