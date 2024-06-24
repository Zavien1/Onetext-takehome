import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlayIcon } from "./icons";
import { TestingChat } from "./TestingChat";
import { AvatarIcon } from "./AvatarIcon";

export const TestFlowDialog = ({ nodes }: any) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-500 hover:bg-blue-400 cursor-pointer">
          <PlayIcon />
          Test Flow
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-[60rem]">
        <DialogTitle className="hidden">Testing Bot</DialogTitle>

        <DialogHeader className="border-b pb-4 flex flex-row space-x-4">
          <AvatarIcon className="" />
          <p>Testing Bot</p>
        </DialogHeader>
        <TestingChat nodes={nodes} />
      </DialogContent>
    </Dialog>
  );
};
