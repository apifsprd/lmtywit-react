import { useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../posts.json";

function Home() {
  const posts = data[0].posts;
  const heroPost = data[0].heropost[0];

  useEffect(function () {
    document.title = "Home | LMTYWIT";
  }, []);

  return (
    <>
      <div className="mb-5">
        <img
          src={`img/posts/${heroPost.image}`}
          className="rounded-xl mb-2"
          alt=""
        />
        <Link to={`/post/${heroPost.slug}`} className="hover:underline">
          <h1 className="font-['Source_Serif_Pro']  text-2xl">
            {heroPost.title}
          </h1>
        </Link>
        <p>
          {heroPost.author} &middot; {heroPost.date}
        </p>
      </div>

      <hr />

      {posts?.map((post) => (
        <div className="grid grid-cols-3 mt-5 mb-5" key={post.id}>
          <div className="col-span-2 flex items-center">
            <div>
              <Link to={`/post/${post.slug}`} className="hover:underline">
                <h1 className="font-['Source_Serif_Pro'] text-lg">
                  {post.title}
                </h1>
              </Link>
              <p className="text-xs">
                {post.author} &middot; {post.date}
              </p>
            </div>
          </div>
          <div>
            <img
              src={`img/posts/${post.image}`}
              className="rounded-xl mb-2"
              alt=""
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default Home;
