import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";

function Header() {
  const { user, isSignedIn} = useUser();
  return (
    <div className="flex p-3 px-5 justify-between shadow-md">
      <img src="/logo.svg" alt="logo" className="h-10 w-10" />
      {isSignedIn ? (
        <div className="flex gap-2 items-center">
          <Link to={"/dashboard"}>
            <Button variant="outline">Dashboard</Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link to={"/auth/sign-in"}>
          <Button>Sign In</Button>
        </Link>
      )}
    </div>
  );
}

export default Header;
