"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="flex items-center gap-10 py-16">
      <Link
        className="text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
        href="https://github.com/MaddoxNehls/Code-To-Image-App"
      >
        Source Code &nbsp;&#129109;
      </Link>
        <span className="pl-1 font-medium text-slate-200">Made with ❤️ by Maddox Nehls</span>
      <Link
        href="https://github.com/MaddoxNehls"
        className="flex items-center text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
      >
        My GitHub &nbsp;&#129109;
      </Link>
    </div>
  );
}

export default Footer;
