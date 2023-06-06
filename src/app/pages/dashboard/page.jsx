"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import AddPostDashbord from "./AddPostDashbord";
import { Box, Typography, styled } from "@mui/material";

//////////////////// EXPORT FUNCTION ////////////////////
export default function Dashboard() {
  //////////////////// STYLES ////////////////////
  const RootDashboard = styled(Box)(({ theme }) => ({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {},
  }));

  const session = useSession();
  // console.log(session);

  const router = useRouter();

  //NEW WAY TO FETCH DATA
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>Loading...</p>;
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
      <>
        {isLoading
          ? "loading"
          : data?.map(({ _id, img, title, desc, content }) => (
              <div key={_id}>
                <div>
                  <Image src={img} alt='' width={200} height={100} />
                </div>
                <Typography variant='h4'>{title}</Typography>
                <Typography variant='h4'>{desc}</Typography>
                <Typography variant='h4'>{content}</Typography>
                <span
                  className={styles.delete}
                  onClick={() => handleDelete(_id)}
                >
                  X
                </span>
              </div>
            ))}
      </>
    </RootDashboard>
  );
}
