import React from "react";

import { Skeleton } from "@/components/shared/skeleton/Skeleton";

export default async function Home() {
  return (
    <>
      <div className="z-10 grid w-full max-w-xl gap-8 px-5 xl:px-0">
        <Skeleton />
        <Skeleton type="fullwidth" />
        <Skeleton type="header" />
        <Skeleton type="subheader" />
        <Skeleton type="paragraph" />
        <Skeleton type="paragraph-s" />

        <div className=" h-20 w-40">
          <Skeleton />
        </div>
        <div className="h-40 w-20">
          <Skeleton />
        </div>
        <div className="h-[500px] w-[500px]">
          <Skeleton />
        </div>
      </div>
    </>
  );
}
