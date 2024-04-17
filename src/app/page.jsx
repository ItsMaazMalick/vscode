import { FileDiff, FolderOpen, Hash, MessageCircleMore } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#1d1c1d] w-full text-white px-12">
      <h1 className="mt-16 text-6xl">Maaz Malick</h1>
      <p className="mt-2 text-2xl text-[#a09f9f]">Full Stack Developer</p>
      {/* SKILLS AND ABOUT */}
      <div className="flex mt-6">
        <div className="flex-1">
          <p className="mb-3 text-xl">Start</p>
          <div className="space-y-2 text-blue-600">
            <Link href={"/"} className="flex items-center gap-2 text-sm">
              <FileDiff size={18} />
              Skills...
            </Link>
            <Link href={"/"} className="flex items-center gap-2 text-sm">
              <FolderOpen size={18} />
              Projects...
            </Link>
            <Link href={"/"} className="flex items-center gap-2 text-sm">
              <Hash size={18} />
              Anime...
            </Link>
            <Link href={"/"} className="flex items-center gap-2 text-sm">
              <MessageCircleMore size={18} />
              Get in Touch...
            </Link>
            <p className="pt-6 text-xl text-white">Recent</p>
            <p className="text-[#a09f9f] text-sm">No Recent Activity!</p>
          </div>
        </div>
        <div className="flex-1">
          <p className="mb-3 text-xl">About</p>
          <div className="space-y-2 bg-[#2b2a2a]">
            <div className="relative flex items-center gap-2 p-2 border-b-[5px] border-b-[#557fda]">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/color/48/linkedin-circled--v1.png"
                alt="linkedin-circled--v1"
              />
              LinkedIn Profile
            </div>
            <div className="relative flex items-center gap-2 p-2 border-b-[5px] border-b-[#557fda]">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-filled/50/github.png"
                alt="github"
              />
              Github Page
            </div>
            <div className="relative flex items-center gap-2 p-2 border-b-[5px] border-b-[#557fda]">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/color/48/twitter--v1.png"
                alt="twitter--v1"
              />
              Twitter Handle
            </div>
            <div className="relative flex items-center gap-2 p-2 border-b-[5px] border-b-[#557fda]">
              <div className="w-[30px] h-[30px] flex justify-center items-center bg-red-500 rounded-full">
                P
              </div>
              Product Hunt Page
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
