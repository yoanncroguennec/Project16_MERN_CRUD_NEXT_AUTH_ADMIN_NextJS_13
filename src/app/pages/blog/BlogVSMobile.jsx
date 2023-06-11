"use client";
import Truncate from "react-truncate";
import { Box, Typography, styled } from "@mui/material";
// NEXT
import Image from "next/image";
import Link from "next/link";

//////////////////// EXPORT FUNCTION ////////////////////
export default function BlogVSMobile({ data }) {

    const stylesLink = {
      color: "#FFF",
      cursor: "pointer",
      textDecoration: "none",
    };
  
      const BoxImgCategory = styled(Box)(({ theme }) => ({
        flex: 1,
        height: "200px",
        margin: "20px 0",
        position: "relative",
      }));

  const stylesImg = {
    objectFit: "cover",
  };
  return (
    <div>
      <Typography align='center' variant='h4'>
        Publications des Utilisateurs
      </Typography>
      {data?.map(({ _id, title, desc, content, img }) => (
          <Link href={`/pages/blog/${_id}`} key={_id} style={stylesLink}>
            {/* <Typography>{10 bons plans gratuits à Paris}</Typography> */}
            <Typography variant='h4'>{title}</Typography>
            <Typography variant='h6'>{desc}</Typography>
            <BoxImgCategory>
              <Link href={`/pages/blog/${_id}`} style={stylesLink}>
                <Image alt='' fill={true} src={img} style={stylesImg} />
              </Link>
            </BoxImgCategory>
            <Truncate lines={8} ellipsis={<span>.......</span>}>
              <div
                dangerouslySetInnerHTML={{ __html: content }}
                style={{ fontSize: "1em" }}
              />
            </Truncate>
          </Link>
      ))}
    </div>
  );
}
