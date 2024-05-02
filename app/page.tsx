import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BytedanceIcon from "@/source/BytedanceLight.svg";

export default function Dashboard() {
  return (
    <div className="grid sm:px-20 sm:grid-cols-3 h-[600px]">
      <div className="sm:col-span-1  flex items-center justify-center">
        <Card>
          <CardHeader>
            <div className="flex">
              <span className="font-medium text-xl">V5</span>
              <Image
                className="rounded-full"
                width={150}
                height={150}
                src="https://avatars.githubusercontent.com/u/62976589?v=4"
                alt={"ddd"}
              ></Image>
            </div>
            <CardDescription>2023 Master graduated</CardDescription>
          </CardHeader>
          <CardContent>
            <div>Front-end Development Engineer</div>
            <div className="flex items-center mt-2">
              <Image src={BytedanceIcon} alt="bytedance" />
              <span className="ml-2">Now Working in ByteDance</span>
            </div>
          </CardContent>
          <CardFooter>hello~</CardFooter>
        </Card>
      </div>
      <div className="sm:col-span-2 flex flex-col items-center justify-center">
        <div className="">
          <div className="text-2xl md:text-5xl tracking-widest animate-fade-up animate-ease-in-out">
            Hello ~<div>Welcome to my channel</div>
          </div>
          <div className="text-5xl md:text-8xl tracking-widest font-black bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 animate-fade-up animate-ease-in-out">
            A growing front-end developer
          </div>
          <div className="text-2xl md:text-5xl tracking-widest animate-fade-up animate-ease-in-out">
            在这个网站中记录点滴的成长
          </div>
          <div className="text-2xl md:text-5xl tracking-widest animate-fade-up animate-ease-in-out">
            喜欢钢琴、吉他、同时也热爱编程
          </div>
        </div>
      </div>
    </div>
  );
}
