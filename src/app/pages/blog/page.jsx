import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { baseURL_Website } from "@/app/utils/api/baseURL";
async function getData() {
  const res = await fetch(`${baseURL_Website}/posts`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      {data.map(({ _id, title, desc, img }) => (
        <Link href={`/pages/blog/${_id}`} className={styles.item} key={_id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.desc}>{desc}</p>
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              height={250}
              src={img}
              alt=''
              width={400}
            />
          </div>

          {/* <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt=''
              width={400}
              height={250}
              className={styles.image}
            />
          </div> */}
          {/* <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div> */}
        </Link>
      ))}
    </div>
  );
};

export default Blog;
