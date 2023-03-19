import React, { useEffect } from "react";

function About() {
  useEffect(function () {
    document.title = "About | LMTYWIT";
  }, []);

  return (
    <>
      <h1 className="font-bold text-3xl mb-5">LMTYWIT is ..</h1>
      <p className="text-justify space-y-5 tracking-tight font-serif">
        LMTYWIT stands for Let Me Tell You What I Think, starting from a reading
        into an anxiety to want to write and tell everything that I think is
        interesting to discuss, trying to have an opinion on the events that
        happened. It all started with the anxiety of trying to give a personal
        perspective. as the name implies, "Let Me Tell You What I Think",
        welcome and thank you for visiting my personal blog, hopefully it will
        give you a new perspective.
      </p>
      <p className="mt-5">Thanks for coming 👋</p>
      <p className="mt-5">
        Regards, <br /> Apif Supriadi
      </p>

      <div className="border-2 mt-10 p-3 text-center text-slate-500">
        LMTYWIT MAKE WITH{" "}
        <a
          href="https://react.dev/"
          target={"_blank"}
          className="text-blue-600 underline"
        >
          REACT
        </a>
      </div>
    </>
  );
}

export default About;
