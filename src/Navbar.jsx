import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 bg-[#e1f5fe] dark:bg-gray-900 ">
        <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl px-4 md:px-6 py-4">
          <a href="#" className="flex items-center">
            <img
              src="img/lmtywit-header.png"
              className="h-6 mr-3 sm:h-9"
              alt="Logo"
            />
          </a>
        </div>
      </nav>
      <nav className="bg-[#81d4fa] dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-1 mx-auto md:px-6">
          <div className="flex justify-center items-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-bold">
              <li>
                <Link
                  to={"/"}
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/about"}
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  About
                </Link>
              </li>
              {/* <li>
                <Link
                  to={"/archive"}
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Archive
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Layout;
