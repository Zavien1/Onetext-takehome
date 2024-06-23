import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SaveFlowDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Save Flow</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Save Flow</DialogTitle>
          <DialogDescription>
            Save your current flow to your account to revisit later.
          </DialogDescription>
        </DialogHeader>
        <div className="grid py-4">
          <p className="text-sm text-gray-500 mb-2">Flow Name</p>
          <div className="grid grid-cols-4 items-center">
            <Input id="name" placeholder="My new flow" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
