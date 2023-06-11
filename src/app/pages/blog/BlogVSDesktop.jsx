"use client";

// import Truncate from "react-truncate";
import { Box, Typography, styled } from "@mui/material";
// NEXT
import Link from "next/link";
import Image from "next/image";

//////////////////// EXPORT FUNCTION ////////////////////
export default function BlogVSDesktop({ data }) {
  //////////////////// STYLES ////////////////////
  const TypoTitleCategoryPage = styled(Typography)(({ theme }) => ({
    color: "#53c28b",
    [theme.breakpoints.down("sm")]: {},
  }));

  const BoxItem = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "50px",
    marginTop: "50px",
    marginBottom: "100px",
    "&:nth-child(2n+1)": {
      flexDirection: "row-reverse",
    },
  }));

  const stylesLink = {
    color: "#FFF",
    cursor: "pointer",
    textDecoration: "none",
  };

  const BoxContent = styled(Box)(({ theme }) => ({
    display: "flex",
    flex: 1,
    flexDirection: "column",
    gap: "20px",
    justifyContent: "center",
  }));

  const BoxImgCategory = styled(Box)(({ theme }) => ({
    flex: 1,
    height: "500px",
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
        <BoxItem key={_id}>
          <BoxContent>
            <Link href={`/pages/blog/${_id}`} style={stylesLink}>
              {/* <Typography>{10 bons plans gratuits à Paris}</Typography> */}
              <Typography variant='h4'>{title}</Typography>
              <Typography variant='h5'>{desc}</Typography>
              {/* <Truncate lines={8} ellipsis={<span>.......</span>}>
                <div
                  dangerouslySetInnerHTML={{ __html: content }}
                  style={{ fontSize: "1em" }}
                />
              </Truncate> */}
            </Link>
          </BoxContent>

          <BoxImgCategory>
            <Link href={`/pages/blog/${_id}`} style={stylesLink}>
              <Image alt='' fill={true} src={img} style={stylesImg} />
            </Link>
          </BoxImgCategory>
        </BoxItem>
      ))}
    </div>
  );
}
