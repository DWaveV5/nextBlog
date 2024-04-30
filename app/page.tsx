import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="grid sm:px-20 grid-rows-3 h-[600px]">
      <div className="sm:grid-rows-1  flex items-center justify-center">
        <Card className="h-96 w-72">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
      <div className="sm:grid-rows-2">介绍内容</div>
    </div>
  );
}
