import React from "react";
import { ModeToggle } from "../ThemeButton";

export default function Header() {
  return (
    <div className="mx-auto w-[70%] h-[64px] flex justify-between items-center">
      <div className="flex">
        <ModeToggle />
        <div className="text-[20px] ml-[8px] font-[600] flex items-center">
          是V5~呀
        </div>
      </div>
      <div className="flex space-x-8 font-medium text-[18px]">
        <div>首页</div>
        <div>关于我</div>
      </div>
    </div>
  );
}
