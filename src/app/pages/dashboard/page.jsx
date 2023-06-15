"use client";

import {
  Box,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// SWR est une bibliothèque React Hooks pour la récupération de données.
import useSWR from "swr";
import ScrollToTop from "react-scroll-to-top";
// NEXT
import Image from "next/image";
import { useRouter } from "next/navigation";
// NEXT AUTH
import { useSession } from "next-auth/react";
import AddPostDashbord from "./AddPostDashbord";
// ICONS
import { RxCross2 } from "react-icons/rx";
const colorIcon = "#FF0000";
const sizeIcon = 35;

//////////////////// EXPORT FUNCTION ////////////////////
export default function Dashboard() {
  //////////////////// RESPONSIVES ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  //////////////////// STYLES ////////////////////
  const RootDashboard = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    marginTop: "100px",
    [theme.breakpoints.down("sm")]: {},
  }));

  const BoxImgBtnDeleteResponsive = styled(Box)(({ theme }) => ({
    align: "center",
    display: "flex",
    flexWrap: "nowrap",
  }));

  const stylesImgItem = {
    border: "5px solid #FFF",
    borderRadius: "4px",
    marginRight: "20px",
  };

  const BoxItem = styled(Box)(({ theme }) => ({
    color: "#000",
    alignItems: "center",
    display: "flex",
    flexGrow: "nowrap",
    margin: "35px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  }));

  const BoxItemDescDelete = styled(Box)(({ theme }) => ({
    background:
      "linear-gradient(180deg, rgba(105,105,105,1) 0%,rgba(240,240,240,1) 100%)",
    borderRadius: "10px",
    padding: "15px",
    display: "flex",
    flexWrap: "nowrap",
    marginLeft: "30px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      marginLeft: "0px",
      marginTop: "20px",
    },
  }));

  const BoxItemDesc = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
  }));

  const TypoTitleItem = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
  }));

  const stylesHr = {
    background: "#FFF",
    color: "#FFF",
    height: "4px",
    marginTop: "50px",
    width: "250px",
  };

  const session = useSession();
  // console.log(session);

  const router = useRouter();

  // New way to fetch data
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>Chargement...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/pages/dashboard/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };


  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <RootDashboard>
      <AddPostDashbord handleSubmit={handleSubmit} />
      {isLoading
        ? "loading"
        : data?.map(({ _id, img, title, desc, content }) => (
            <BoxItem key={_id}>
              <BoxImgBtnDeleteResponsive>
                <Image
                  alt=''
                  height={130}
                  src={img}
                  style={stylesImgItem}
                  width={200}
                />
                {matches ? null : (
                  <RxCross2
                    color={colorIcon}
                    onClick={() => handleDelete(_id)}
                    size={sizeIcon}
                  />
                )}
              </BoxImgBtnDeleteResponsive>
              <BoxItemDescDelete>
                <BoxItemDesc>
                  <TypoTitleItem variant={matches ? "h4" : "h5"}>
                    {title}
                  </TypoTitleItem>
                  <Typography variant={matches ? "h5" : "h6"}>
                    {desc}
                  </Typography>
                  <div
                    dangerouslySetInnerHTML={{ __html: content }}
                    style={{ fontSize: "1em" }}
                  />
                </BoxItemDesc>
                <RxCross2
                  color={colorIcon}
                  onClick={() => handleDelete(_id)}
                  size={sizeIcon}
                />
              </BoxItemDescDelete>
              {matches ? null : <hr style={stylesHr} />}
            </BoxItem>
          ))}
      <ScrollToTop smooth />
    </RootDashboard>
  );
}
