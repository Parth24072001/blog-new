import { Link } from "@remix-run/react";

const Section6 = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-5 sm:py-10 md:py-16 relative">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-10">
        <div className="sm:col-span-6 lg:col-span-5">
          <Link to="#">
            <div
              className="h-56 bg-cover text-center overflow-hidden"
              style={{
                backgroundImage:
                  "url(https://tailwindcss.com/img/card-left.jpg)",
              }}
              title="Woman holding a mug"
            ></div>
          </Link>
          <div className="mt-3 bg-background rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className="lg:pl-16">
              <Link
                to="#"
                className="text-xs text-primary uppercase font-medium mb-3 flex items-center hover:text-textt  transition duration-500 ease-in-out"
              >
                Fashion
              </Link>
              <Link
                to="#"
                className="text-textt  font-bold text-lg mb-2 hover:text-primary transition duration-500 ease-in-out"
              >
                The perfect summer sweater that you can wear!{" "}
              </Link>
              <p className="text-textt text-xs mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div>

        <div className="sm:col-span-6 lg:col-span-4">
          <div className="flex items-start mb-3 pb-3">
            <Link to="#" className="inline-block mr-3">
              <div
                className="w-20 h-20 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://tailwindcss.com/img/card-left.jpg)",
                }}
              ></div>
            </Link>
            <div className="text-sm">
              <p className="text-primary  text-xs">Aug 18</p>
              <Link
                to="#"
                className="text-textt  font-medium hover:text-primary leading-none"
              >
                Cristiano Ronaldo of Juventus FC looks dejected during the...
              </Link>
            </div>
          </div>
          <div className="flex items-start mb-3 pb-3">
            <Link to="#" className="inline-block mr-3">
              <div
                className="w-20 h-20 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://tailwindcss.com/img/card-left.jpg)",
                }}
              ></div>
            </Link>
            <div className="text-sm w-2/3">
              <p className="text-primary  text-xs">Jan 18</p>
              <Link
                to="#"
                className="text-textt  font-medium hover:text-primary leading-none"
              >
                Barcelona v Bayern Munich{" "}
              </Link>
            </div>
          </div>
          <div className="flex items-start mb-3 pb-3">
            <Link to="#" className="inline-block mr-3">
              <div
                className="w-20 h-20 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://tailwindcss.com/img/card-left.jpg)",
                }}
              ></div>
            </Link>
            <div className="text-sm">
              <p className="text-primary  text-xs">Aug 18</p>
              <Link
                to="#"
                className="text-textt  font-medium hover:text-primary leading-none"
              >
                Cristiano Ronaldo of Juventus FC looks dejected during the...
              </Link>
            </div>
          </div>
          <div className="flex items-start">
            <Link to="#" className="inline-block mr-3">
              <div
                className="w-20 h-20 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://tailwindcss.com/img/card-left.jpg)",
                }}
              ></div>
            </Link>
            <div className="text-sm w-2/3">
              <p className="text-primary  text-xs">July 23</p>
              <Link
                to="#"
                className="text-textt  font-medium hover:text-primary leading-none"
              >
                Barcelona v Bayern Munich - UEFA Champions League{" "}
              </Link>
            </div>
          </div>
        </div>

        <div className="sm:col-span-12 lg:col-span-3">
          <Link to="#">
            <div
              className="h-56 bg-cover text-center overflow-hidden"
              style={{
                backgroundImage:
                  "url(https://tailwindcss.com/img/card-left.jpg)",
              }}
              title="Woman holding a mug"
            ></div>
          </Link>
          <div className="mt-3 bg-background rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className="">
              <Link
                to="#"
                className="text-xs text-primary uppercase font-medium flex items-center hover:text-textt  transition duration-500 ease-in-out"
              >
                Fashion
              </Link>
              <Link
                to="#"
                className="text-textt  font-bold text-lg mb-2 hover:text-primary transition duration-500 ease-in-out"
              >
                The perfect summer sweater that you can wear!{" "}
              </Link>
              <p className="text-textt text-xs mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[300px] rounded-md border bg-background dark:bg-background shadow-lg transition-colors duration-500">
        <img
          src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="Laptop"
          className="h-[200px] w-full rounded-t-md object-cover"
        />
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold text-textt  dark:text-gray-100">
            About Macbook &nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </h1>
          <p className="mt-3 text-sm text-textt  dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          <div className="mt-4">
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-[10px] font-semibold text-textt  dark:text-gray-300">
              #Macbook
            </span>
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-[10px] font-semibold text-textt  dark:text-gray-300">
              #Apple
            </span>
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-[10px] font-semibold text-textt  dark:text-gray-300">
              #Laptop
            </span>
          </div>
          <button
            type="button"
            className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:focus-visible:outline-white transition-all duration-300"
          >
            Read
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section6;
