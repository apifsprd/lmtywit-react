import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../posts.json";

const Post = () => {
  const params = useParams();
  const posts = data[0].posts;
  const heroPost = data[0].heropost[0];

  let post = [];
  const findOnPosts = posts.filter(function match(post) {
    return post.slug == params.slug;
  });
  if (findOnPosts.length != 0) {
    post = findOnPosts;
  } else {
    post = [heroPost];
  }

  useEffect(function () {
    document.title = `${post[0].title} | LMTYWIT`;
  }, []);

  return (
    <>
      <p className="text-xs rounded font-serif">#{post[0].tag}</p>
      <h1 className="text-3xl font-bold font-[helvetica] py-2">
        {post[0].title}
      </h1>
      <p className="text-sm mb-5">
        {post[0].author} &middot; {post[0].date}
      </p>
      <img
        src={`/img/posts/${post[0].image}`}
        className="rounded-xl mb-3"
        alt=""
      />
      <p className="text-xs text-center">Sumber : {post[0].imgcaption}</p>
      <div
        className="my-5 font-['Source_Serif_Pro'] text-justify space-y-5 tracking-tight text-lg"
        dangerouslySetInnerHTML={{ __html: `${post[0].body}` }}
      />
      <div>
        <Link to={"/"} className="text-blue-600 hover:underline">
          &larr; Read More Articles
        </Link>
      </div>
    </>
  );
};

export default Post;
