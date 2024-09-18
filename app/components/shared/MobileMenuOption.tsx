/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */

type MenuItem = {
  _id: string;
  title: string;
  imageUrl: string;
  position: number;
  submenu: Array<{
    title: string;
    hidden: boolean;
    imageUrl: string;
    position: number;
    _id: string;
    menuId: string;
    subMenuId: string;
  }>;
  similarMenu: string[];
  hidden: boolean;
  menuId: string;
  __v: number;
};

const MobileMenuOption = ({ menus }: any) => {
  return (
    <>
      <ul className="w-full px-4   common_container">
        <li className=" grid grid-cols-3 gap-6 sm:grid-cols-3 maxXsm:grid-cols-1 maxXs:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 py-2">
          {menus?.map((item: MenuItem) => (
            <li className="" key={item?._id}>
              <p className=" text-primary">{item?.title}</p>
              {item?.submenu && item.submenu.length > 0 && (
                <>
                  <div className=" flex flex-col">
                    {item.submenu.map((submenuItem: any) => (
                      <a
                        href="#compa"
                        key={submenuItem._id}
                        className=" text-textt"
                      >
                        {submenuItem?.title}
                      </a>
                    ))}
                  </div>
                </>
              )}
            </li>
          ))}
        </li>
      </ul>
    </>
  );
};

export default MobileMenuOption;
