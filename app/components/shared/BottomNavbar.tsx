/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "@remix-run/react";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Alert = ({ bannerData }: { bannerData: any }) => {
  const [showAlert, setShowAlert] = React.useState(true);
  return (
    <>
      {showAlert ? (
        <div
          className={
            "text-textt px-6 py-4 border-0  relative  bg-primary  border-b border-solid border-primary"
          }
        >
          <span className="inline-block align-middle ">
            {bannerData[0]?.title}{" "}
            <Link
              to={bannerData[0]?.link}
              prefetch="viewport"
              className=" text-textt underline"
            >
              here
            </Link>
          </span>
          <button
            className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
            onClick={() => setShowAlert(false)}
          >
            <span>×</span>
          </button>
        </div>
      ) : null}
    </>
  );
};

export default function BottomNavbar({ bannerData }: { bannerData: any }) {
  return <Alert bannerData={bannerData} />;
}
