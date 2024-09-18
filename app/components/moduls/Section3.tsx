import { Link } from "@remix-run/react";

const Section3 = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-5 sm:py-10 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
        <div
          className="relative w-full flex items-end justify-start text-left bg-cover bg-center"
          style={{
            height: "450px",
            backgroundImage:
              "url(https://media.gettyimages.com/photos/at-the-the-network-tolo-televised-debate-dr-abdullah-abdullah-with-picture-id1179614034?k=6&m=1179614034&s=612x612&w=0&h=WwIX3RMsOQEn5DovD9J3e859CZTdxbHHD3HRyrgU3A8=)",
          }}
        >
          <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
          <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
            <Link
              to="#"
              className="text-xs bg-primary text-white px-5 py-2 uppercase hover:bg-background hover:text-primary transition ease-in-out duration-500"
            >
              Politics
            </Link>
            <div className="text-white font-regular flex flex-col justify-start">
              <span className="text-3xl leading-0 font-semibold">25</span>
              <span className="-mt-3">May</span>
            </div>
          </div>
          <main className="p-5 z-10">
            <Link
              to="#"
              className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline"
            >
              Dr. Abdullah Abdullahs Presidential Election Campaign
            </Link>
          </main>
        </div>
        <div
          className="relative w-full flex items-end justify-start text-left bg-cover bg-center"
          style={{
            height: "450px",
            backgroundImage:
              "url(https://media.gettyimages.com/photos/at-the-the-network-tolo-televised-debate-dr-abdullah-abdullah-with-picture-id1179614034?k=6&m=1179614034&s=612x612&w=0&h=WwIX3RMsOQEn5DovD9J3e859CZTdxbHHD3HRyrgU3A8=)",
          }}
        >
          <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
          <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
            <Link
              to="#"
              className="text-xs bg-primary text-white px-5 py-2 uppercase hover:bg-background hover:text-primary transition ease-in-out duration-500"
            >
              Politics
            </Link>
            <div className="text-white font-regular flex flex-col justify-start">
              <span className="text-3xl leading-0 font-semibold">25</span>
              <span className="-mt-3">May</span>
            </div>
          </div>
          <main className="p-5 z-10">
            <Link
              to="#"
              className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline"
            >
              Dr. Abdullah Abdullahs Presidential Election Campaign
            </Link>
          </main>
        </div>
        <div
          className="relative w-full flex items-end justify-start text-left bg-cover bg-center"
          style={{
            height: "450px",
            backgroundImage:
              "url(https://media.gettyimages.com/photos/at-the-the-network-tolo-televised-debate-dr-abdullah-abdullah-with-picture-id1179614034?k=6&m=1179614034&s=612x612&w=0&h=WwIX3RMsOQEn5DovD9J3e859CZTdxbHHD3HRyrgU3A8=)",
          }}
        >
          <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
          <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
            <Link
              to="#"
              className="text-xs bg-primary text-white px-5 py-2 uppercase hover:bg-background hover:text-primary transition ease-in-out duration-500"
            >
              Politics
            </Link>
            <div className="text-white font-regular flex flex-col justify-start">
              <span className="text-3xl leading-0 font-semibold">10</span>
              <span className="-mt-3">Mar</span>
            </div>
          </div>
          <main className="p-5 z-10">
            <Link
              to="#"
              className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline"
            >
              Afghanistans President Ashraf Ghani Speaks At The Council
            </Link>
          </main>
        </div>

        <div
          className="relative w-full flex items-end justify-start text-left bg-cover bg-center"
          style={{
            height: "450px",
            backgroundImage:
              "url(https://media.gettyimages.com/photos/at-the-the-network-tolo-televised-debate-dr-abdullah-abdullah-with-picture-id1179614034?k=6&m=1179614034&s=612x612&w=0&h=WwIX3RMsOQEn5DovD9J3e859CZTdxbHHD3HRyrgU3A8=)",
          }}
        >
          <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
          <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
            <Link
              to="#"
              className="text-xs bg-primary text-white px-5 py-2 uppercase hover:bg-background hover:text-primary transition ease-in-out duration-500"
            >
              Politics
            </Link>
            <div className="text-white font-regular flex flex-col justify-start">
              <span className="text-3xl leading-0 font-semibold">20</span>
              <span className="-mt-3">Jan</span>
            </div>
          </div>
          <main className="p-5 z-10">
            <Link
              to="#"
              className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline"
            >
              Middle East Participants Gather In Warsaw
            </Link>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Section3;
