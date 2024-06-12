"use client";
import { useRouter } from "next/navigation";
import { signIn, signOut } from "next-auth/react";

export const Appbar = () => {
  const router = useRouter();
  return (
    <div className="flex mt-5 justify-center">
      <button
        className="mr-10 p-4 border border-slate-50 hover:bg-slate-800"
        onClick={() => {
          signIn();
        }}
      >
        SignIn
      </button>
      <button
        className="border border-slate-50 p-4 hover:bg-slate-800"
        onClick={() => {
          signOut();
        }}
      >
        Logout
      </button>
    </div>
  );
};
