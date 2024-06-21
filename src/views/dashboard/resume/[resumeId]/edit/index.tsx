import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

interface Resume {
  id: string;
  title: string;
  resume_id: string;
  first_name: string;
  last_name: string;
}

function EditResume() {
  const params = useParams();
  useEffect(() => {
    console.log("hi");
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
      <h1>EditResume</h1>
    </div>
  );
}

export default EditResume;
