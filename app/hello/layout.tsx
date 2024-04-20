"use client";
import React, { ReactNode } from "react";
import { css } from "@emotion/css";
const styleTest = css({
  backgroundColor: "yellowgreen",
});

export default function layout({ children }: { children: ReactNode }) {
  const flag = true;
  return (
    <div>
      <div
        className={styleTest}
        css={[
          flag && {
            ".Number": {
              backgroundColor: "powderblue",
            },
          },
          { color: "red" },
        ]}
      >
        hello的Layout<span className="Number">123</span>
      </div>
      {children}
    </div>
  );
}
