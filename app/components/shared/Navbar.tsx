/* eslint-disable @typescript-eslint/no-explicit-any */
import UpperNavbar from "./UpperNavabar";

import BottomNavbar from "./BottomNavbar";

export default function Navbar({
  bannerData,
  menus,
}: {
  bannerData: any;
  menus: any;
}) {
  return (
    <>
      <UpperNavbar menus={menus} />

      <BottomNavbar bannerData={bannerData} />
    </>
  );
}
