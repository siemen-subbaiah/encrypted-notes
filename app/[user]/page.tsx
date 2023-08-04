"use client";
import UserNav from "./components/userNav";
import { useState } from "react";

import { Editor } from "react-draft-wysiwyg";
import TextEditor from "./components/CustomTextEditor";

const UserPage = () => {
  const [value, setValue] = useState<string>("**Hello world!!!**");
  return (
    <>
      <UserNav />
      <div className="container ml-10 mr-10 min-w-fit max-w-screen w-5/6 max-h-screen">
        <TextEditor />
      </div>
    </>
  );
};

export default UserPage;
