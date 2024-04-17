import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex items-center gap-4 bg-[#494849] px-4">
      <img
        width="20"
        height="20"
        src="https://img.icons8.com/color/48/visual-studio-code-2019.png"
        alt="visual-studio-code-2019"
      />
      <div className="flex gap-2 text-[12px] py-1 text-white">
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Experience</Link>
        <Link href={"/"}>Skills</Link>
        <Link href={"/"}>Projects</Link>
        <Link href={"/"}>Contact</Link>
        <Link href={"/"}>Hobbies</Link>
      </div>
          
    </nav>
  );
}
