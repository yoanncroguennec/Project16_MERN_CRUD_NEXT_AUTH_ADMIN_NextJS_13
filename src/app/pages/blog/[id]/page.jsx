import React from "react";
import { notFound } from "next/navigation";
import BlogPostItem from "./BlogPostItem";

async function getData(id) {
    const res = await fetch(
      `https://project16-mern-crud-next-auth-admin-next-js-13.vercel.app/api/posts/${id}`,
      {
        cache: "no-store",
      }
    );

  if (!res.ok) {
    return notFound()
  }

  return res.json();
}


export async function generateMetadata({ params }) {

  const post = await getData(params.id)
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);

  return <BlogPostItem data={data} />;
};

export default BlogPost;
