/* eslint-disable @typescript-eslint/no-explicit-any */
import UpperNavbar from "./UpperNavabar";

import BottomNavbar from "./BottomNavbar";

export default function Navbar({ bannerData }: { bannerData: any }) {
  return (
    <>
      <UpperNavbar />

      <BottomNavbar bannerData={bannerData} />
    </>
  );
}
