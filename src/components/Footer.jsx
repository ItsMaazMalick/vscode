import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <nav className="flex items-center justify-between gap-4 bg-[#557fda] px-1">
      <div className="flex gap-2 text-[12px] py-1 text-white">
        <p href={"/"}>Made in</p>
        <p href={"/"}>NEXT.JS</p>
        <p href={"/"}>Javascript</p>
        <p href={"/"}>Tailwind</p>
        <p href={"/"}>React</p>
      </div>
      {/* RIGHT */}
      <div className="flex gap-2 text-[12px] py-1 text-white">
        <p href={"/"}>Total isits</p>
        <p href={"/"}>Tuesday, April 16, 2024, 04:16:20 PM</p>
        <p href={"/"}>UTF-8</p>
        <p href={"/"}>Port: 443</p>
      </div>
          
    </nav>
  );
}
