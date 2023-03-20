const Footer = () => {
  function currYear() {
    var year = new Date().getFullYear();
    return year;
  }

  return (
    <>
      <footer className="p-4 bg-slate-100 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 xl:px-[10%]  ">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {currYear()}{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Let Me Tell You What I Think by @apifsprd
          </a>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="#"
              target={"_blank"}
              className="mr-4 hover:underline md:mr-6 "
            >
              Discord
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/apfsprd/"
              target={"_blank"}
              className="mr-4 hover:underline md:mr-6 "
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/apifsprd/"
              target={"_blank"}
              className="mr-4 hover:underline md:mr-6"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com/apifsprd/"
              target={"_blank"}
              className="mr-4 hover:underline md:mr-6"
            >
              Twitter
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
