import GlobalApi from "../../../service/GlobalApi";
import AddResume from "./components/AddResume";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import ResumeItem from "./components/ResumeItem";

interface Resume {
  id: string;
  title: string;
  resume_id: string;
  first_name: string;
  last_name: string;
}

function Dashboard() {
  const { user } = useUser();
  const [resumeList, setResumeList] = useState([]);
  const fetchUsrResume = GlobalApi.getUserResume(
    user?.primaryEmailAddress?.emailAddress
  )
    .then((res: unknown) => {
      setResumeList(res?.data?.data);
      console.log("res: ", res);
    })
    .catch((res) => {
      console.log("err: ", res);
    });

  useEffect(() => {
    user && fetchUsrResume;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  console.log("resumeList: ", resumeList);
  return (
    <div className="p-10 md:px-20 lg:px-32">
      <h2 className="font-bold text-3xl">My Resume</h2>
      <p>Start Creating AI resume for your next Job role</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-5">
        <AddResume />
        {resumeList?.length > 0 &&
          resumeList?.map((resume: Resume, index: number) => (
            <ResumeItem resume={resume} index={index} />
          ))}
      </div>
    </div>
  );
}

export default Dashboard;
