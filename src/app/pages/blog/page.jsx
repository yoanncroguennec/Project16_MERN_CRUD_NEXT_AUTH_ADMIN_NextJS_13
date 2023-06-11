import React from "react";

import { baseURL_Website } from "@/app/utils/api/baseURL";
import SwitchResponsiveBlog from "./SwitchResponsiveBlog";

async function getData() {
  const res = await fetch(`${baseURL_Website}/posts`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

//////////////////// EXPORT FUNCTION ////////////////////
export default async function BlogPage () {
  const data = await getData();

  return <SwitchResponsiveBlog data={data} />;
};
