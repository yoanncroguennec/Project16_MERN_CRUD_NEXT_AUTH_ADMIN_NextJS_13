"use client";

import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { notFound } from "next/navigation";
// UTILS DATA
import { dataCategoryPortfolio } from "@/app/utils/data/pages/categories/dataCategoryPortfolio";
import PageCategoryVSDesktop from "./PageCategoryVSDesktop";
import PageCategoryVSMobile from "./PageCategoryVSMobile";

const getData = (cat) => {
  const data = dataCategoryPortfolio[cat];

  if (data) {
    return data;
  }

  return notFound();
};

//////////////////// EXPORT FUNCTION ////////////////////
const Category = ({ params }) => {
  //////////////////// RESPONSIVES ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const data = getData(params.category);

  return matches ? (
    <PageCategoryVSDesktop data={data} params={params} />
  ) : (
    <PageCategoryVSMobile data={data} params={params} />
  );
};

export default Category;
