import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import { PlusSquare } from "lucide-react";
import { useState } from "react";

function AddResume() {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <div>
      <div
        className="p-14 py-24 border
                items-center flex justify-center
                bg-secondary rounded-lg h-[280px]
                hover:scale-105 transition-all hover:shadow-md
                cursor-pointer border-dashed
                "
        onClick={() => setOpenDialog(true)}
      >
        <PlusSquare />
      </div>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              <Input />
            </DialogDescription>
            <div className="flex gap-2 justify-end">
              <Button onClick={() => setOpenDialog(false)}>Create</Button>
              <Button variant="ghost" onClick={() => setOpenDialog(false)}>
                Cancel
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddResume;
