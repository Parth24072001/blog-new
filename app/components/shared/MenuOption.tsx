/* eslint-disable @typescript-eslint/no-explicit-any */
import DarkModeSwitch from "./DarkModeSwitch";

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

const MenuOption = ({ menus }: any) => {
  // console.log(menuData);

  // const MENUUSE = MODE === "DEVELOPMENT" ? menuData?.menuData : dummyData;
  const visibleMenu: any = menus?.slice(0, 5);
  return (
    <>
      <div
        className={"lg:flex flex-grow items-center px-4  flex"}
        id="example-navbar-danger"
      >
        <ul className="flex   list-none lg:ml-auto menulist items-center">
          {visibleMenu.map((item: MenuItem) => (
            <li className=" subnav" key={item?._id}>
              <div>
                <div className="nav-item ">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-textt hover:opacity-75"
                    href="#pablo"
                  >
                    <i className="fab fa-facebook-square text-lg leading-lg text-textt opacity-75"></i>
                    <span className="ml-2">{item?.title}</span>
                  </a>
                </div>
              </div>

              {item?.submenu && item.submenu.length > 0 && (
                <>
                  <div className="caret"></div>
                  <div className="subnav-content">
                    <p className=" text-primary">{item?.title}</p>
                    {item.submenu.map((submenuItem: any) => (
                      <a href="#compa" key={submenuItem._id}>
                        {submenuItem?.title}
                      </a>
                    ))}
                  </div>
                </>
              )}
            </li>
          ))}

          {menus?.length > 5 && (
            <li className=" subnav ">
              <div>
                <div className="nav-item ">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-textt hover:opacity-75"
                    href="#pablo"
                  >
                    <i className="fab fa-facebook-square text-lg leading-lg text-textt opacity-75"></i>
                    <span className="ml-2">{"more"}</span>
                  </a>
                </div>
              </div>
              <div className="caret"></div>

              <div className="subnav-content subnavlast ">
                {menus?.slice(5).map((item: any) => (
                  <li className="" key={item?._id}>
                    <p className=" text-primary">{item?.title}</p>
                    {item?.submenu && item.submenu.length > 0 && (
                      <>
                        <div>
                          {item.submenu.map((submenuItem: any) => (
                            <a href="#compa" key={submenuItem._id}>
                              {submenuItem?.title}
                            </a>
                          ))}
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </div>
            </li>
          )}

          <div className="flex px-3 py-2  lg:z-10 lg:ml-4 lg:items-center">
            <DarkModeSwitch />
          </div>
        </ul>
      </div>
    </>
  );
};

export default MenuOption;
