"use client"

import BlogVSDesktop from './BlogVSDesktop';
// import BlogVSMobile from './BlogVSMobile';
import { useMediaQuery, useTheme } from '@mui/material';

//////////////////// EXPORT FUNCTION ////////////////////
export default function SwitchResponsiveBlog({ data }) {
  //////////////////// RESPONSIVES ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return <BlogVSDesktop data={data} />;
    // return matches ? (
    //   <BlogVSDesktop data={data} />
    // ) : (
    //   <BlogVSMobile data={data} />
    // );
}
