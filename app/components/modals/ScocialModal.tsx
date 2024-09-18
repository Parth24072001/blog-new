import { useState, useEffect } from "react";

import SocialMediaWithLink from "../shared/SocialMediaWithLink";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SocialModal = ({ channelData }: any) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const lastClosed = localStorage.getItem("lastClosed");
      const now = Date.now();

      if (!lastClosed || now - parseInt(lastClosed, 10) > 24 * 60 * 60 * 1000) {
        setOpen(true);
      }
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    if (typeof window !== "undefined") {
      localStorage.setItem("lastClosed", Date.now().toString());
    }
  };

  return open ? (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 maxMd:items-center maxMd:justify-center">
        <div>
          <div className="relative transform overflow-hidden  bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg rounded-[1.25rem] ">
            <div className="absolute right-0 top-0  pr-4 pt-4 sm:block z-10">
              <button
                type="button"
                className=" rounded-md text-black hover:text-textt focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-[1.875rem] h-[1.875rem]"
                onClick={handleClose}
              >
                <span className="sr-only">Close</span>X
              </button>
            </div>

            <div id="contact">
              <div id="contact-body" className="!w-full">
                <img
                  id="contact-background"
                  src={
                    "https://retro-blog-image.s3.ap-south-1.amazonaws.com/socialback.jpeg"
                  }
                  alt=""
                />
                <img id="contact-pp" src={channelData?.imageUrl} alt="" />

                <span id="contact-name">{channelData?.channelName}</span>
                <span id="contact-desc">Follow For More Update</span>

                <div id="contact-social">
                  <div className="socials">
                    <div id="contact-social">
                      <div className="icons">
                        <div className="grid grid-cols-5 gap-6 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-6">
                          {channelData?.links?.map(
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            (item: any, index: number) => (
                              <SocialMediaWithLink
                                key={item.id || index}
                                socialName={item?.socialMediaName?.toLocaleLowerCase()}
                                link={item?.link}
                              />
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default SocialModal;
