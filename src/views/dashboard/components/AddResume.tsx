import { Button } from "@/components/ui/button";
import { v4 as uuidv4 } from "uuid";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import { Loader2, PlusSquare } from "lucide-react";
import { useState } from "react";
import GlobalApi from "../../../../service/GlobalApi";
import { useUser } from "@clerk/clerk-react";

function AddResume() {
  const [openDialog, setOpenDialog] = useState(false);
  const [resumeTitle, setResumeTitle] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useUser();

  const onCreate = () => {
    setLoading(true);
    const id = uuidv4();
    const data = {
      data: {
        resume_id: id,
        first_name: user?.firstName,
        last_name: user?.lastName ?? "",
        email: user?.primaryEmailAddress?.emailAddress,
        title: resumeTitle,
      },
    };

    GlobalApi.createNewResume(data)
      .then((res: unknown) => {
        console.log("res: ", res);
        setLoading(false);
        setOpenDialog(false);
      })
      .catch((err: unknown) => {
        console.log("err: ", err);
        setLoading(false);
      });
  };
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
            <DialogTitle>Create new Resume</DialogTitle>
            <DialogDescription>
              <p>Enter title for your resume</p>
              <Input
                className="my-2"
                placeholder="Ex.Full Stack Engineer"
                onChange={(e: unknown) => setResumeTitle(e.target.value)}
              />
            </DialogDescription>
            <div className="flex gap-2 justify-end">
              <Button variant="ghost" onClick={() => setOpenDialog(false)}>
                Cancel
              </Button>
              <Button
                disabled={!resumeTitle || loading}
                onClick={() => onCreate()}
              >
                {loading ? <Loader2 className="animate-spin" /> : "Create"}
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddResume;
